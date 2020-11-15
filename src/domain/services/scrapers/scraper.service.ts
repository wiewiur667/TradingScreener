import {Service} from "@tsed/di";
import {Store} from "@tsed/core";
import {IScraperService} from "./scraper-service.interface";
import {IScraperServicePlugin} from "@plugins/scraper-service-plugin.interface";
import {FinVizScraperService} from "@plugins/finviz/service/finviz-scraper.service";

/**
 * Wrapper around specific scrapers
 *
 * @export
 * @class ScraperService
 * @implements {IScraperService}
 */

@Service()
export class ScraperService implements IScraperService {
  services!: Array<{
    name: string;
    service: IScraperServicePlugin;
  }>;

  results?: Array<unknown> = [];

  constructor(finviz: FinVizScraperService) {
    this.services.push({
      name: "FinViz",
      service: finviz
    });
    console.log(Store);
  }

  /**
   * Executes given scraper for every symbol in the array
   * @param scraperPluginName
   * @param symbols
   */
  async scrape(scraperPluginName: string, symbols: string[]): Promise<void> {
    console.log(scraperPluginName, symbols);
    const scraper = (this.services.find((a) => a.name == scraperPluginName) as any).service as IScraperServicePlugin;

    if (symbols && symbols.length) {
      symbols.forEach(async (symbol) => {
        if (symbol) {
          if (scraper) {
            const result = await scraper.scrape(symbol);
            if (result) this.results?.push(result);
          }
        }
      });
    }
  }
}
