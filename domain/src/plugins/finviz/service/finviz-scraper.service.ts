import axios from 'axios';
import cheerio from 'cheerio';

import { FinVizModel } from '../model/finviz.model';
import { FinVizRating } from '../model/finviz-rating.model';
import { IScraperServicePlugin } from '@plugins/scraper-service-plugin.interface';
import { IScraperConfiguration } from '@infrastructure/config/scraper-configuration.interface';
import { Configuration } from '@infrastructure/configuration';
import { ProviderScope, Scope, Service } from '@tsed/di';
import { SignatureKind } from 'typescript';

/**
 * FinViz scraper service
 *
 * @export
 * @class FinVizScraperService
 * @implements {IScraperServicePlugin}
 */
@Scope(ProviderScope.SINGLETON)
export class FinVizScraperService implements IScraperServicePlugin {
  config: IScraperConfiguration;

  constructor(config: Configuration, options?:unknown) {
    this.config = config.getScraperConfig('FinViz');
  }
  /**
   * FinViz implementation of scraper
   * Pushes result to {results}
   * @param {string} symbol
   * @return {*}  {Promise<void>}
   * @memberof FinVizScraperService
   */
  async scrape<FinVizModel>(symbol: string): Promise<FinVizModel | undefined> {
    const symbolUrl = `${this.config.baseUrl}?t={symbol}`.replace('{symbol}', symbol);

    try {
      const response = await axios.get(symbolUrl, {
        headers: this.config.options.headers,
      });
      const $ = cheerio.load(response.data);

      const model = new FinVizModel();

      const table = $('table.snapshot-table2 td')
        .toArray()
        .map(cell => {
          return $(cell).text();
        });
      const resultData = new Map<string, unknown>();

      for (let i = 0; i < table.length; i += 2) {
        resultData.set(table[i], table[i + 1]);
      }

      model.map(resultData);

      model.ScreenerName = 'FinViz';
      model.Symbol = symbol;
      model.ScreenDate = new Date(Date.now());

      model.Ratings = this.getRatings($);

      return model as unknown as FinVizModel;
    } catch (error) {
      //console.error("Failed to parse: ", error)
    }
  }

  private getRatings($: cheerio.Root): FinVizRating[] {
    const data = $(
      "table.fullview-ratings-outer tr[class^='body-table-rating-'] tr[class^='body-table-rating-']",
    ).toArray();
    return data.map((r: any) => {
      const columns = $($(r).children()).toArray();
      const result = new FinVizRating();
      result.Date = new Date(Date.parse($(columns[0]).text()));
      result.Type = $(columns[1]).text();
      result.Who = $(columns[2]).text();
      result.Subtype = $(columns[3]).text();

      const regex = /.*?(\d+.\d*)\s.*?\s.*?(\d+.\d*)/gm;
      const prices = regex.exec($(columns[4]).text());

      if (prices) {
        result.PriceFrom = parseFloat(prices[1] ?? -1);
        result.PriceTo = parseFloat(prices[2] ?? -1);
      }

      return result;
    });
  }
}
