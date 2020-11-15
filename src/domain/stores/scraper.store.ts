import {getModelForClass, getModelWithString, DocumentType} from "@typegoose/typegoose";
import {BaseStore} from "./base.store";
import {Screener} from "@models/screeners/screener.model";
import {ScreenerModelBase} from "@models/screeners/screener-model-base.model";

export class ScraperStore extends BaseStore {
  private screenerModel = getModelForClass(Screener);

  async saveResult<T extends ScreenerModelBase>(item: T): Promise<void> {
    const model = getModelWithString(typeof item);
    if (model) {
      const r = new model(item);
      await r.save();
      console.log("Item saved", item.Symbol);
    }
  }

  async getScraper(screenerName: string): Promise<DocumentType<Screener> | null> {
    return await this.screenerModel.findOne({Name: screenerName});
  }
}
