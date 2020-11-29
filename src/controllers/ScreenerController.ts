import {BodyParams, Controller, Delete, Get, Patch, PathParams, Post, Put} from "@tsed/common";
import {Conflict, MethodNotAllowed, NotFound} from "@tsed/exceptions";
import {CollectionOf, Returns} from "@tsed/schema";
import {ScreenerStoreException, ScreenerStoreExceptionType} from "../models/exceptions/ScreenerStoreException";
import {ScreenInstrument} from "../models/screeners/screen-instrument.model";
import {Screener} from "../models/screeners/screener.model";
import {ScreenerStore} from "../stores/screener.store";

/**
 * @category Controller
 */
@Controller("/screener")
export class ScreenerController {
  screenerStore: ScreenerStore;
  constructor(screenerStore: ScreenerStore) {
    this.screenerStore = screenerStore;
  }
  /**
   * Gets instruments
   * @param name (Optional)
   * @category CRUD
   */
  @Get("/:name?")
  @(Returns(200, Array).Of(Screener).Description("Success"))
  async get(@PathParams("name") name?: string): Promise<Screener[]> {
    return (await this.screenerStore.get(name, false)) as Screener[];
  }

  /**
   * Inserts new Screener
   * @param item
   * @category CRUD
   */
  @Post()
  @(Returns(201, Screener).Description("Created"))
  @Returns(Conflict.STATUS, Conflict)
  async post(@BodyParams() item: Screener): Promise<any> {
    try {
      return await this.screenerStore.insert(item);
    } catch (ex) {
      throw new Conflict(ex.message);
    }
  }

  /**
   * Updates Screener using param
   * @param screener
   * @category CRUD
   */
  @Put()
  @(Returns(200, Screener).Description("Success"))
  @Returns(Conflict.STATUS, Conflict)
  @(Returns(NotFound.STATUS, NotFound).Description("Not Found"))
  async put(@BodyParams() screener: Screener): Promise<any> {
    try {
      return await this.screenerStore.update(screener);
    } catch (ex) {
      if (ex instanceof ScreenerStoreException) {
        if (ex.type == ScreenerStoreExceptionType.NotExists) throw new NotFound("");
        if (ex.type == ScreenerStoreExceptionType.MultipleFound) throw new Conflict(ex.message);
      }
    }
  }

  /**
   * Deletes Screener using param
   * @param screener
   * @category CRUD
   */
  @Delete("/:name")
  @(Returns(200, Screener).Description("Success"))
  @(Returns(NotFound.STATUS, NotFound).Description("Not Found"))
  async delete(@PathParams("name") name: string): Promise<any> {
    try {
      return await this.screenerStore.delete(name);
    } catch (ex) {
      if (ex instanceof ScreenerStoreException) {
        if (ex.type == ScreenerStoreExceptionType.NotExists) throw new NotFound("");
      }
    }
  }

  /**
   * Gets instruments from selected Screener
   * @param name Screener name
   * @category Instruments
   */
  @Put("/:name/getInstruments")
  @(Returns(200, Screener).Description("Success"))
  @Returns(Conflict.STATUS, Conflict)
  @(Returns(NotFound.STATUS, NotFound).Description("Not Found"))
  async getInstruments(@PathParams("name") name: string): Promise<any | undefined> {
    try {
      return await this.screenerStore.getInstruments(name);
    } catch (ex) {
      if (ex instanceof ScreenerStoreException) {
        if (ex.type == ScreenerStoreExceptionType.NotExists) throw new NotFound(ex.message, ex);
        if (ex.type == ScreenerStoreExceptionType.MultipleFound || ex.type == ScreenerStoreExceptionType.Exists)
          throw new Conflict(ex.message, ex);
      }
    }
  }

  /**
   * Adds instruments to selected Screener
   * @param name Screener name
   * @param instruments Instruments to add
   * @category Instruments
   */
  @Put("/:name/addInstruments")
  @(Returns(200, Screener).Description("Success"))
  @Returns(Conflict.STATUS, Conflict)
  @(Returns(NotFound.STATUS, NotFound).Description("Not Found"))
  async addInstruments(
    @PathParams("name") name: string,
    @BodyParams() @CollectionOf(String) instruments: Array<string>
  ): Promise<any | undefined> {
    try {
      return await this.screenerStore.addInstruments(name, instruments);
    } catch (ex) {
      if (ex instanceof ScreenerStoreException) {
        if (ex.type == ScreenerStoreExceptionType.NotExists) throw new NotFound(ex.message, ex);
        if (ex.type == ScreenerStoreExceptionType.MultipleFound || ex.type == ScreenerStoreExceptionType.Exists)
          throw new Conflict(ex.message, ex);
      }
    }
  }

  /**
   * Delete instruments to selected Screener
   * @param name Screener name
   * @param instruments Instruments to add
   * @category Instruments
   */
  @Delete("/:name/deleteInstruments")
  @(Returns(200, Screener).Description("Success").ContentType("application/json"))
  @Returns(MethodNotAllowed.STATUS, MethodNotAllowed)
  @(Returns(NotFound.STATUS, NotFound).Description("Not Found"))
  async deleteInstruments(
    @PathParams("name") name: string,
    @BodyParams() @CollectionOf(String) instruments: Array<string>
  ): Promise<any | undefined> {
    try {
      return await this.screenerStore.deleteInstruments(name, instruments);
    } catch (ex) {
      if (ex instanceof ScreenerStoreException) {
        if (ex.type == ScreenerStoreExceptionType.Empty) throw new MethodNotAllowed(ex.message, ex);
        if (ex.type == ScreenerStoreExceptionType.NotExists) throw new NotFound(ex.message, ex);
        if (ex.type == ScreenerStoreExceptionType.MultipleFound || ex.type == ScreenerStoreExceptionType.Exists)
          throw new Conflict(ex.message, ex);
      }
    }
  }

  /**
   * Update instruments to selected Screener
   * @param name Screener name
   * @param instruments Instruments to add
   * @category Instruments
   */
  @Patch("/:name/updateInstruments")
  @(Returns(200, Screener).Description("Success").ContentType("application/json"))
  @Returns(MethodNotAllowed.STATUS, undefined)
  @Returns(NotFound.STATUS, undefined)
  async updateInstruments(
    @PathParams("name") name: string,
    @BodyParams() @CollectionOf(String) instruments: Array<ScreenInstrument>
  ): Promise<any | undefined> {
    try {
      return await this.screenerStore.updateInstruments(name, instruments);
    } catch (ex) {
      if (ex instanceof ScreenerStoreException) {
        if (ex.type == ScreenerStoreExceptionType.Empty) throw new MethodNotAllowed(ex.message, ex);
        if (ex.type == ScreenerStoreExceptionType.NotExists) throw new NotFound(ex.message, ex);
        if (ex.type == ScreenerStoreExceptionType.MultipleFound || ex.type == ScreenerStoreExceptionType.Exists)
          throw new Conflict(ex.message, ex);
      }
    }
  }
}
