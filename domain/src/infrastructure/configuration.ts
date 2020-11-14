//import * as config from "../config.json";
import { IScraperConfiguration } from "@infrastructure/config/scraper-configuration.interface";
import { IConfiguration } from "@infrastructure/configuration.interface";

export class Configuration implements IConfiguration {

  general!: { databaseUrl: string; dbName: string; PORT:number; };
  scrapers!: IScraperConfiguration[];

  constructor() {
    //this.general = config.general;
    //this.scrapers = config.screeners;
  }

  getScraperConfig(name: string): IScraperConfiguration {
    return this.scrapers.find(s=> s.name.toLowerCase() == name.toLowerCase()) ?? {} as IScraperConfiguration;
  }
  
}
