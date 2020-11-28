import { ConnectionOptions } from "mongoose";

import { IScraperConfiguration } from "./config/scraper-configuration.interface";

export interface IConfiguration {
  general: {
    server: {
      port: number;
    };
    mongo: {
      databaseUrl: string;
      dbName: string;
      options: ConnectionOptions;
    };
  };

  screeners: IScraperConfiguration[];
}
