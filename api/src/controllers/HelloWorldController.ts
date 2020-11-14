import {Controller, Get} from "@tsed/common";
import { ScraperService } from "domain/src/services/scrapers/scraper.service"

@Controller("/hello-world")
export class HelloWorldController {
  private _scraperService!: ScraperService;
  constructor(scrapeService: ScraperService) {
    this._scraperService = scrapeService;
  }

  @Get("/")
  get() {
    return "hello";
  }

  @Get("/scrape")
  async scrape() {
    await this._scraperService.scrape("FinViz", ["MSFT"]);
    return this._scraperService.results;
  }
}
