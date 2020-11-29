export interface IScrapeModel {
  ScraperName?: string;
  Symbol?: string;
  ScreenDate?: Date;

  parseNumber(numberString: string): number;
  parseBoolean(booleanString: string): boolean;
  parseRange(rangeString: string): Array<any>;
}
