import {prop} from "@typegoose/typegoose";
import {IInstrumentModel} from "../IInstrumentModel.interface";

export class InstrumentBase implements IInstrumentModel {
  @prop()
  Instrument?: string;

  @prop()
  MinTradedQty?: number;

  @prop()
  MarketH?: string;
}
