import { getModelForClass } from "@typegoose/typegoose";
import { BaseStore } from "./base.store";
import { Screener } from "@models/screeners/screener.model";
import { IConfiguration } from "@infrastructure/configuration.interface";

export class ScreenerStore {
  private screenerModel = getModelForClass(Screener);
  private baseStore?: BaseStore;

  constructor(configuration: IConfiguration) {
    this.baseStore = new BaseStore(configuration.general.databaseUrl, configuration.general.dbName);
  }

  async connect(): Promise<void> {
    await this.baseStore?.connect();
  }

  async disconnect(): Promise<void> {
    await this.baseStore?.disconnect();
  }

  async getScreener(name: string): Promise<Screener | null> {
    return (await this.screenerModel.findOne({ Name: name }).exec())?.toObject();
  }

  async addScreener(screener: Screener): Promise<void> {
    const screenerInstance = new this.screenerModel(screener);
    await screenerInstance.save();
  }

  async updateScreener(screener: Screener): Promise<void> {
    const screenerInstance = await this.screenerModel.findOne({ Name: screener.Name }).exec();
    await screenerInstance?.update(screener);
    await screenerInstance?.save();
  }

  async deleteScreener(name: string): Promise<void> {
    const screenerInstance = await this.screenerModel.findOne({ Name: name }).exec();
    await screenerInstance?.remove();
  }
}
