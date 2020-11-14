import { prop } from "@typegoose/typegoose";

export class FinVizRating {
  @prop()
  Date?: Date;
  @prop()
  Type?: string;
  @prop()
  Who?: string;
  @prop()
  Subtype?:string;
  @prop()
  PriceFrom?: number;
  @prop()
  PriceTo?: number;
  @prop()
  Currency?:string;
}