import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";
import { ProviderScope, Scope } from "@tsed/di";
import { Screener } from "../models/screeners/screener.model";

@Scope(ProviderScope.SINGLETON)
export class ScreenerStore {
  screenerModel: ReturnModelType<typeof Screener, unknown>;

  constructor() {
    this.screenerModel = getModelForClass(Screener);
  }

  async get(name?: string): Promise<Screener[] | undefined> {
    const query = {} as any;
    if (name) {
      query.Name = name;
    }

    return await this.screenerModel.find(query).exec();
  }

  async set(screener: Screener): Promise<Screener | undefined> {
    const screenerInstance = new this.screenerModel(screener);
    return await screenerInstance.save();
  }

  async update(screener: Screener): Promise<Screener | undefined> {
    const screenerInstance = await this.screenerModel.findOne({ Name: screener.Name }).exec();
    await screenerInstance?.update(screener);
    return await screenerInstance?.save();
  }

  async delete(name: string): Promise<void> {
    const screenerInstance = await this.screenerModel.findOne({ Name: name }).exec();
    await screenerInstance?.remove();
  }
}
