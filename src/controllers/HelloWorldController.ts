/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get } from "@tsed/common";
import { ScreenerStore } from "../domain/stores/screener.store";

@Controller("/test")
export class HelloWorldController {
  private _screenerStore: ScreenerStore;

  constructor(screenerStore: ScreenerStore) {
    this._screenerStore = screenerStore;
  }
  @Get("/")
  get() {
    return "hello";
  }
}
