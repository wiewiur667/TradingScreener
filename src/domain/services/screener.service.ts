import { ProviderScope, Scope } from "@tsed/di";
import { IScreenerService } from "./screener-service.interface";

import { IScraperServicePlugin } from "../plugins/scraper-service-plugin.interface";
import { FinVizScraperService } from "../plugins/finviz/service/finviz-scraper.service";
import { IScrapeModel } from "../plugins/scrape-model.interface";
import { FinVizModel } from "../plugins/finviz/model/finviz.model";

/**
 * Wrapper around specific scrapers
 *
 * @export
 * @class ScraperService
 * @implements {IScreenerService}
 */

@Scope(ProviderScope.SINGLETON)
export class ScreenerService implements IScreenerService {
  services: Array<{
    name: string;
    service: IScraperServicePlugin;
  }> = [];

  results: Map<string, unknown[]> = new Map<string, unknown[]>();

  constructor(finviz: FinVizScraperService) {
    this.services.push({
      name: "FinViz",
      service: finviz
    });
  }

  /**
   * Executes given scraper for every symbol in the array
   * @param scraperPluginName
   * @param symbols
   */
  async scrape(scraperPluginName: string, symbols: string[]): Promise<string[]> {
    const scraper = (this.services.find((a) => a.name == scraperPluginName) as any).service as IScraperServicePlugin;
    const results: unknown[] = [];

    if (symbols && symbols.length) {
      if (scraper) {
        await Promise.all(
          symbols.map(async (symbol) => {
            results.push(await scraper.scrape<FinVizModel>(symbol));
            scraper.save<FinVizModel>(results as FinVizModel[]);
          })
        );
      }
      return result;
    }

    return [];
  }
}
