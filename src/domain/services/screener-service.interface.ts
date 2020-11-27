export interface IScreenerService {
  scrape(scraperPluginName: string, symbols: string[]): Promise<string[]>;
}
