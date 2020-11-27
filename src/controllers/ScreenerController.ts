import { ContentType, Controller, Get, Post, QueryParams, BodyParams, $log } from "@tsed/common";
import { Status } from "@tsed/schema";
import { BadRequest, InternalServerError } from "@tsed/exceptions";
import { Screener } from "../domain/models/screeners/screener.model";

import { ScreenerStore } from "../domain/stores/screener.store";
import { ScreenList } from "../domain/models/dto/screenlist";
import { ScreenerService } from "../domain/services/screener.service"

@ContentType("application/json")
@Controller("/screeners")
export class SreenerController {
  private _screenerStore: ScreenerStore;
  private _screenerService: ScreenerService;

  constructor(screenerStore: ScreenerStore, screenerService: ScreenerService) {
    this._screenerStore = screenerStore;
    this._screenerService = screenerService;
  }

  @Get("/")
  async get(@QueryParams("name") name?: string): Promise<Screener[] | undefined> {
    return await this._screenerStore.get(name);
  }

  @Post("/")
  @Status(201)
  @Status(400)
  @Status(500)
  async post(@BodyParams(Screener) screener: Screener): Promise<Screener | undefined> {
    if (!screener) {
      throw new BadRequest("");
    }
    try {
      return await this._screenerStore.set(screener as Screener);
    } catch (ex) {
      throw new InternalServerError(ex);
    }

    return undefined;
  }

  @Post("/screen")
  async screen(@BodyParams(ScreenList) screenlist: ScreenList): Promise<string[] | undefined> {
    if (!screenlist) {
      throw new BadRequest("");
    }

    try {
      return this._screenerService.scrape(screenlist.screener, screenlist.symbols);
    } catch (ex) {
      throw new InternalServerError(ex);
    }
    return undefined;
  }
}
