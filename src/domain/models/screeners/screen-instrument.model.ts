import {prop} from "@typegoose/typegoose/lib/prop";

export class ScreenInstrument {
  @prop()
  Symbol?: string;
  @prop()
  Enabled?: boolean;
  @prop()
  LastScreenDate?: Date;
}
