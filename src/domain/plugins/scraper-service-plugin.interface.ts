export interface IScraperServicePlugin {
  scrape<T>(symbol: string): Promise<T | undefined>;
}
