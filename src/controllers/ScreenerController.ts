import {BodyParams, Controller, Get, PathParams, Post, Put} from "@tsed/common";
import {Conflict, NotFound} from "@tsed/exceptions";
import {CollectionOf, Returns} from "@tsed/schema";
import {ScreenerStoreException, ScreenerStoreExceptionType} from "../models/exceptions/ScreenerStoreException";
import {Screener} from "../models/screeners/screener.model";
import {ScreenerStore} from "../stores/screener.store";

@Controller("/screener")
export class ScreenerController {
  screenerStore: ScreenerStore;
  constructor(screenerStore: ScreenerStore) {
    this.screenerStore = screenerStore;
  }

  @Post()
  @(Returns(201, Screener).ContentType("application/json"))
  @Returns(409, undefined)
  async post(@BodyParams() item: Screener): Promise<Screener | undefined> {
    try {
      return await this.screenerStore.set(item);
    } catch (ex) {
      if (ex?.type == "exists") {
        throw new Conflict(ex.message);
      }
    }
  }

  @Put("/:name/addInstruments")
  @(Returns(200, Screener).ContentType("application/json"))
  @Returns(409, undefined)
  async addInstruments(
    @PathParams("name") name: string,
    @BodyParams() @CollectionOf(String) instruments: Array<string>
  ): Promise<Screener | undefined> {
    try {
      return this.screenerStore.addInstruments(name, instruments);
    } catch (ex) {
      if (ex instanceof ScreenerStoreException) {
        if (ex.type == ScreenerStoreExceptionType.NotExists) throw new NotFound("");
        if (ex.type == ScreenerStoreExceptionType.MultipleFound) throw new Conflict(ex.message);
      }
    }
  }

  @Get("/:name?")
  @(Returns(200, Array).Of(Screener).ContentType("application/json"))
  async get(@PathParams("name") name?: string): Promise<Screener[] | undefined> {
    return this.screenerStore.get(name);
  }
}
