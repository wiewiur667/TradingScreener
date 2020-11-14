import { Service } from '@tsed/di';
import { IScraperService } from './scraper-service.interface';

/**
 * Wrapper around specific scrapers
 *
 * @export
 * @class ScraperService
 * @implements {IScraperService}
 */

@Service()
export class ScraperService implements IScraperService {
  results?: Array<unknown> = [];
  
  /**
   * Executes given scraper for every symbol in the array
   * @param scraperPluginName
   * @param symbols
   */
  async scrape(scraperPluginName: string, symbols: string[]): Promise<void> {
    console.log(scraperPluginName, symbols);
    // const plugins = container.resolve<Plugins>('Plugins');
    // const scraper = plugins.getScraperByName(scraperPluginName);

    // if (symbols && symbols.length) {
    //   symbols.forEach(async symbol => {
    //     if (symbol) {
    //       if (scraper) {
    //         const result = await scraper.scrape(symbol);
    //         if (result) this.results?.push(result);
    //       }
    //     }
    //   });
    // }
  }
}
