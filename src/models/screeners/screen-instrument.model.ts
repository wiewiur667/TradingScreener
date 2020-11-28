import {Any, Format, Required} from "@tsed/schema";
import {prop} from "@typegoose/typegoose/lib/prop";

export class ScreenInstrument {
  @Required()
  @prop()
  Symbol: string;

  @Format("date-time")
  @prop()
  ScreenDate?: Date;

  constructor(symbol: string, screenDate?: Date) {
    this.Symbol = symbol;
    this.ScreenDate = screenDate;
  }
}
