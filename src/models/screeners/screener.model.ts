import {Any, CollectionOf, Required, Uri} from "@tsed/schema";
import {prop} from "@typegoose/typegoose";
import {ScreenInstrument} from "./screen-instrument.model";

export class Screener {
  @Required()
  @prop()
  Name?: string;

  @Uri()
  @prop()
  Url?: string;

  @Any(String, null)
  @prop()
  Description?: string;

  @Any(Boolean)
  @prop()
  Enabled?: boolean = true;

  @CollectionOf(ScreenInstrument)
  @prop({type: () => [ScreenInstrument]})
  Instruments: ScreenInstrument[] = [];
}
