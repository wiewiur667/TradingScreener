import { prop } from "@typegoose/typegoose";
import { ScreenInstrument } from "./screen-instrument.model";

export class Screener {
  @prop()
  Name?: string;
  @prop()
  Url?: string;
  @prop()
  Description?: string;
  @prop()
  Enabled?: boolean = true;
  @prop({ type: () => [ScreenInstrument] })
  Instruments?: ScreenInstrument[] = [];
}
