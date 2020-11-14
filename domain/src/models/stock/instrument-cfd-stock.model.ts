import { modelOptions, prop } from "@typegoose/typegoose";
import { CFD } from "./instrument-cfd.abstract.model";

/**
 * Model containing Trading212 Stocks
 *
 * @export
 * @class CFDStock
 * @extends {CFD}
 */
@modelOptions({schemaOptions: {collection: "instruments.trading212.cfd.stock"}})
export class CFDStock extends CFD {
  @prop()
  Company?:string
}