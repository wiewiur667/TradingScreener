import {ReturnModelType} from "@typegoose/typegoose";
import {ProviderScope, Scope} from "@tsed/di";
import {Screener} from "../models/screeners/screener.model";
import {FinVizModel} from "../plugins/finviz/model/finviz.model";

@Scope(ProviderScope.SINGLETON)
export class ScraperStore {
  screenerModel: ReturnModelType<typeof Screener, unknown>;
  finVizModel: ReturnModelType<typeof FinVizModel, unknown>;
}
