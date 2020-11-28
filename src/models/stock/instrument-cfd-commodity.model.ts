import { modelOptions } from "@typegoose/typegoose";

import { CFD } from "./instrument-cfd.abstract.model";
/**
 * Model containing Trading212 CFD Commodities
 *
 * @export
 * @class CFDCommodity
 * @extends {CFD}
 */
@modelOptions({ schemaOptions: { collection: "instruments.trading212.cfd.commodity" } })
export class CFDCommodity extends CFD {}
