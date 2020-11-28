import {BodyParams, Controller, Get, PathParams, Post} from "@tsed/common";
import {Returns} from "@tsed/schema";
import {IScrapeModel} from "../plugins/scrape-model.interface";
import {ScraperService} from "../services/scraper.service";

@Controller("/scraper")
export class ScraperController {
  screenerService: ScraperService;

  constructor(screenerService: ScraperService) {
    this.screenerService = screenerService;
  }
  
  @Post("/scrape")
  @(Returns(200, Object).ContentType("application/json")) // => 'application/json'
  async scrape(@BodyParams() symbols: string[]): Promise<IScrapeModel[]> {
    const results = await this.screenerService.scrape("FinViz", symbols);
    //this.screenerService.save("FinViz", results);
    return results;
  }
}
