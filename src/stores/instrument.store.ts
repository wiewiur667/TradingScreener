import {getModelForClass} from "@typegoose/typegoose";
import {IInstrumentModel} from "../models/IInstrumentModel.interface";
import {Equity} from "../models/stock/equity.model";
import {CFDCommodity} from "../models/stock/instrument-cfd-commodity.model";
import {CFDForex} from "../models/stock/instrument-cfd-forex.model";
import {CFDIndex} from "../models/stock/instrument-cfd-index.model";
import {CFDStock} from "../models/stock/instrument-cfd-stock.model";
import {BaseStore} from "./base.store";

export class InstrumentStore {
  private baseStore?: BaseStore;

  private trading212Instruments = {
    equity: getModelForClass(Equity),
    cfd: {
      commodity: getModelForClass(CFDCommodity),
      forex: getModelForClass(CFDForex),
      index: getModelForClass(CFDIndex),
      stock: getModelForClass(CFDStock)
    }
  };

  async getAllInstruments(unique = true): Promise<string[] | null> {
    const instruments = {
      equity: await this.trading212Instruments.equity.find().exec(),
      cfd: {
        commodity: await this.trading212Instruments.cfd.commodity.find().exec(),
        forex: await this.trading212Instruments.cfd.forex.find().exec(),
        index: await this.trading212Instruments.cfd.index.find().exec(),
        stock: await this.trading212Instruments.cfd.stock.find().exec()
      }
    };

    const result = ([
      ...instruments.equity,
      ...instruments.cfd.commodity,
      ...instruments.cfd.forex,
      ...instruments.cfd.index,
      ...instruments.cfd.stock
    ] as IInstrumentModel[])
      .filter((a) => a.Instrument != null && a.Instrument != "")
      .map((a) => a.Instrument as string);

    if (!unique) return result;

    return [...new Set(result)];
  }
}
