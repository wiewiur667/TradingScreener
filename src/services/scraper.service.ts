import {ProviderScope, Scope} from "@tsed/di";
import {IScraperService as IScraperService} from "./scraper-service.interface";

import {IScraperServicePlugin} from "../plugins/scraper-service-plugin.interface";
import {FinVizScraperService} from "../plugins/finviz/service/finviz-scraper.service";
import {IScrapeModel} from "../plugins/scrape-model.interface";

import Bottleneck from "bottleneck";
/**
 * Wrapper around specific scrapers
 *
 * @export
 * @class ScraperService
 * @implements {IScraperService}
 */

@Scope(ProviderScope.SINGLETON)
export class ScraperService implements IScraperService {
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
  async scrape(scraperPluginName: string, symbols: string[]): Promise<IScrapeModel[]> {
    const scraper = (this.services.find((a) => a.name == scraperPluginName) as any).service as IScraperServicePlugin;
    const results: IScrapeModel[] = [];

    const limiter = new Bottleneck({
      minTime: 200,
      maxConcurent: 10
    });

    if (symbols && symbols.length) {
      if (scraper) {
        await limiter.schedule(async () => {
          const prom = symbols.map(async (symbol) => {
            try {
              console.log(`Processing ${symbol}...`);
              const r = await scraper.scrape(symbol);
              console.log(`${symbol} Success`);
              if (r) results.push(r);
            } catch (ex) {
              console.log(`${symbol} Failed`);
            }
          });
          await Promise.all(prom);
        });
      }
      return results;
    }

    return [];
  }
}
