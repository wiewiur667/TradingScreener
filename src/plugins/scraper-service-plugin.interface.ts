import {IScrapeModel} from "./scrape-model.interface";

export interface IScraperServicePlugin {
  scrape(symbol: string): Promise<IScrapeModel | undefined>;
  save(results: IScrapeModel[]): Promise<number | undefined>;
}
