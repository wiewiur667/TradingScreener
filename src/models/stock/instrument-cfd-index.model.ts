import {modelOptions} from "@typegoose/typegoose";

import {CFD} from "./instrument-cfd.abstract.model";
/**
 * Model containing Trading212 Indices
 *
 * @export
 * @class CFDIndex
 * @extends {CFD}
 */
@modelOptions({schemaOptions: {collection: "instruments.trading212.cfd.index"}})
export class CFDIndex extends CFD {}
