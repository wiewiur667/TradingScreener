/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ScraperService } from "../domain/services/scrapers/scraper.service";
import { Controller, Get, QueryParams } from "@tsed/common";

@Controller("/hello-world")
export class HelloWorldController {
  test: string[];
  private _scraperService: ScraperService;

  constructor(scraperService: ScraperService) {
    this._scraperService = scraperService;
  }
  @Get("/")
  get() {
    this.test?.push("assad");
    return "hello";
  }

  @Get("/scrape")
  async scraper(@QueryParams("scraper") scraper: string, @QueryParams("symbols") symbols: string[]) {
    await this._scraperService.scrape(scraper, symbols);
    return JSON.stringify(Array.from(this._scraperService.results.entries()));
  }
}
