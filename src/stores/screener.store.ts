import {getModelForClass, ReturnModelType} from "@typegoose/typegoose";
import {ProviderScope, Scope} from "@tsed/di";
import {Screener} from "../models/screeners/screener.model";
import {FinVizModel} from "../plugins/finviz/model/finviz.model";
import { ScreenInstrument } from '../models/screeners/screen-instrument.model';
import { ScreenerStoreException, ScreenerStoreExceptionType } from '../models/exceptions/ScreenerStoreException';

@Scope(ProviderScope.SINGLETON)
export class ScreenerStore {
  screenerModel: ReturnModelType<typeof Screener, unknown>;
  finVizModel: ReturnModelType<typeof FinVizModel, unknown>;

  constructor() {
    this.screenerModel = getModelForClass(Screener);
    this.finVizModel = getModelForClass(FinVizModel);
  }

  async get(name?: string): Promise<Screener[] | undefined> {
    const query = {} as any;
    if (name) query.Name = {$regex: new RegExp(name, "i")};

    return await this.screenerModel.find(query).exec();
  }

  async set(screener: Screener): Promise<Screener | undefined> {
    const items = await this.get(screener.Name);
    if (items && items.length > 0) throw {type: "exists", message: `Screener with name ${screener.Name} already exists!`};

    const screenerInstance = new this.screenerModel(screener);
    return await screenerInstance.save();
  }

  async update(screener: Screener): Promise<Screener | undefined> {
    const screenerInstance = await this.screenerModel.findOne({Name: screener.Name}).exec();
    await screenerInstance?.update(screener);
    return await screenerInstance?.save();
  }

  async delete(name: string): Promise<void> {
    const screenerInstance = await this.screenerModel.findOne({Name: name}).exec();
    await screenerInstance?.remove();
  }

  async addInstruments(name: string, symbols: string[]): Promise<Screener | undefined> {
    const screeners = await this.get(name);
    if (screeners) {
      if (screeners.length == 1) {
        const instrumentsFromString = symbols.map((i) => new ScreenInstrument(i));
        screeners[0].Instruments.push(...instrumentsFromString);
        return await this.update(screeners[0]);
      } else if (screeners.length > 0) {
        throw new ScreenerStoreException(ScreenerStoreExceptionType.MultipleFound);
      } else {
        throw new ScreenerStoreException(ScreenerStoreExceptionType.NotExists);

      }
    }
    return undefined;
  }
}
