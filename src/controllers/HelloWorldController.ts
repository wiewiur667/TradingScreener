/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {ScraperService} from "@services/scrapers/scraper.service";
import {Controller, Get} from "@tsed/common";

@Controller("/hello-world")
export class HelloWorldController {
  private _scraperService: ScraperService;

  constructor(scraperService: ScraperService) {
    this._scraperService = scraperService;
  }
  @Get("/")
  get() {
    return "hello";
  }

  @Get("/scraper")
  async scraper() {
    await this._scraperService.scrape("FinViz", ["MSFT"]);
    return this._scraperService.results;
  }
}
