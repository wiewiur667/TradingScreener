export interface IScraperService {
  scrape(scraperPluginName: string, symbols: string[]): Promise<boolean>;
}
