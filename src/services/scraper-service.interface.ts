import {IScrapeModel} from "../plugins/scrape-model.interface";

export interface IScraperService {
  scrape(scraperPluginName: string, symbols: string[]): Promise<IScrapeModel[]>;
}
