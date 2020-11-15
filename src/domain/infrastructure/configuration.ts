//import * as config from "../config.json"
import { ProviderScope, Scope } from "@tsed/di";
import { IScraperConfiguration } from "./config/scraper-configuration.interface";
import { IConfiguration } from "./configuration.interface";
import * as config from "config";

@Scope(ProviderScope.SINGLETON)
export class ConfigurationService {
  configuration: IConfiguration;

  constructor() {
    this.configuration = (config as unknown) as IConfiguration;
  }

  getScraperConfig(name: string): IScraperConfiguration {
    return this.configuration.screeners.find((s) => s.name.toLowerCase() == name.toLowerCase()) ?? ({} as IScraperConfiguration);
  }
}
