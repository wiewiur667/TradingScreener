import { modelOptions } from "@typegoose/typegoose";

import {CFD} from "./instrument-cfd.abstract.model"
/**
 * Model containing Trading212 CDF Forex
 *
 * @export
 * @class CFDForex
 * @extends {CFD}
 */
@modelOptions({schemaOptions: {collection: "instruments.trading212.cfd.forex"}})
export class CFDForex extends CFD {
}