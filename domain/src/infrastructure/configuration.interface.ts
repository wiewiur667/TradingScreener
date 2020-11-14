import {IScraperConfiguration} from "@infrastructure/config/scraper-configuration.interface"

export interface IConfiguration {
  general: {
    PORT: number
    databaseUrl: string
    dbName: string
  } 

  scrapers: IScraperConfiguration[]

  getScraperConfig(name: string): IScraperConfiguration;
}