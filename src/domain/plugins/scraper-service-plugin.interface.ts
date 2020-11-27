export interface IScraperServicePlugin {
  scrape<T>(symbol: string): Promise<T | undefined>;
  save<T>(results: T[]): Promise<number | undefined>;
}
