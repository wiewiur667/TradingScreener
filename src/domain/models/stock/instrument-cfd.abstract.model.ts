import { prop } from "@typegoose/typegoose";
import { InstrumentBase } from "./stock.base.model";

/**
 * Abstract
 *
 * @export
 * @abstract
 * @class CFD
 * @extends {InstrumentBase}
 */
export abstract class CFD extends InstrumentBase {
  @prop()
  MarginRetail?: string;

  @prop()
  MarginProfessional?: string;

  @prop()
  LongPos?: number;

  @prop()
  ShortPos?: number;
}
