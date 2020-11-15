import { ProviderScope, Scope } from "@tsed/di";
import { IScraperService } from "./scraper-service.interface";
import { IScraperServicePlugin } from "../../plugins/scraper-service-plugin.interface";
import { FinVizScraperService } from "../../plugins/finviz/service/finviz-scraper.service";

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
  async scrape(scraperPluginName: string, symbols: string[]): Promise<boolean> {
    const scraper = (this.services.find((a) => a.name == scraperPluginName) as any).service as IScraperServicePlugin;
    if (!this.results.get(scraperPluginName)) {
      this.results.set(scraperPluginName, []);
    }
    if (symbols && symbols.length) {
      if (scraper) {
        const scraperResults = this.results.get(scraperPluginName);
        await Promise.all(
          symbols.map(async (symbol) => {
            const result = await scraper.scrape(symbol);
            if (scraperResults) scraperResults.push(result);
          })
        );
      }
      return this.results.size > 0;
    }

    return false;
  }
}
