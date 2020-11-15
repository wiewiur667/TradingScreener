import { IScraperConfiguration } from "./config/scraper-configuration.interface";

export interface IConfiguration {
  general: {
    PORT: number;
    databaseUrl: string;
    dbName: string;
  };

  screeners: IScraperConfiguration[];
}
