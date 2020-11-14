import { modelOptions, prop } from '@typegoose/typegoose';

import { FinVizRating } from './finviz-rating.model';

import { mapString, mapNumber, mapRange, mapBool } from './decorators';

import { DocumentType } from '@typegoose/typegoose';

import {ScreenerModelBase} from "@models/screeners/screener-model-base.model";

@modelOptions({schemaOptions: {collection: "scrapingResults"}})
export class FinVizModel extends ScreenerModelBase {
  store<FinVizModel>(this: DocumentType<FinVizModel>): void {
    this.save();
  }

  map(data: Map<string, any>): void {
    const properties = Reflect.getMetadata('finviz:mapping', this) as any;

    properties.forEach((k: any) => {
      try {
        let val;
        switch (k.type) {
          case 'string':
            val = data.get(k.mapping);
            break;
          case 'number':
            val = this.parseNumber(data.get(k.mapping));
            break;
          case 'range':
            val = this.parseNumber(this.parseRange(data.get(k.mapping))[k.order]);
            break;
          case 'boolean':
            val = this.parseBoolean(data.get(k.mapping));
            break;
        }
        (this as any)[k.key] = val;
      } catch (err) {
        console.error(err);
      }
    });
  }

  @prop()
  ScreenerName?: string;

  @prop()
  Symbol?: string;

  @prop()
  ScreenDate?: Date;

  @mapString('Index')
  @prop()
  Index?: string;

  @mapNumber('Market Cap')
  @prop()
  MarketCap?: number;

  @mapNumber('Income')
  @prop()
  Income?: number;

  @mapNumber('Sales')
  @prop()
  Sales?: number;

  @mapNumber('Book/sh')
  @prop()
  Book_Sh?: number;

  @mapNumber('Cash/sh')
  @prop()
  Cash_Sh?: number;

  @mapNumber('Dividend')
  @prop()
  Dividend?: number;

  @mapNumber('Dividend %')
  @prop()
  Dividend_Pct?: number;

  @mapNumber('Employees')
  @prop()
  Employees?: number;

  @mapBool('Optionable')
  @prop()
  Optionable?: boolean;

  @mapBool('Shortable')
  @prop()
  Shortable?: boolean;

  @mapNumber('Recom')
  @prop()
  Recom?: number;

  @mapNumber('P/E')
  @prop()
  P_E?: number;

  @mapNumber('Forward P/E')
  @prop()
  ForwardP_E?: number;

  @mapNumber('PEG')
  @prop()
  PEG?: number;

  @mapNumber('P/S')
  @prop()
  P_S?: number;

  @mapNumber('P/B')
  @prop()
  P_B?: number;

  @mapNumber('P/C')
  @prop()
  P_C?: number;

  @mapNumber('P/FCF')
  @prop()
  P_FCF?: number;

  @mapNumber('Quick Ratio')
  @prop()
  QuickRatio?: number;

  @mapNumber('Current Ratio')
  @prop()
  CurrentRatio?: number;

  @mapNumber('Debt/Eq')
  @prop()
  Debt_Eq?: number;

  @mapNumber('LT Debt/Eq')
  @prop()
  LTDebt_Eq?: number;

  @mapNumber('SMA20')
  @prop()
  SMA20_Pct?: number;

  @mapNumber('EPS (ttm)')
  @prop()
  EPS?: number;

  @mapNumber('EPS next Y')
  @prop()
  EPSNextY?: number;

  @mapNumber('EPS next Q')
  @prop()
  EPSNextQ?: number;

  @mapNumber('EPS this Y')
  @prop()
  EPSThisY_Pct?: number;

  @mapNumber('EPS next Y')
  @prop()
  EPSNextY_Pct?: number;

  @mapNumber('EPS next 5Y')
  @prop()
  EPSNext5Y_Pct?: number;

  @mapNumber('EPS past 5Y')
  @prop()
  EPSPast5Y_Pct?: number;

  @mapNumber('Sales past 5Y')
  @prop()
  SalesPast5Y_Pct?: number;

  @mapNumber('Sales Q/Q')
  @prop()
  SalesQ_Q_Pct?: number;

  @mapNumber('EPS Q/Q')
  @prop()
  EPSQ_Q_Pct?: number;

  @mapNumber('Earnings')
  @prop()
  Earnings?: string;

  @mapNumber('SMA50')
  @prop()
  SMA50_Pct?: number;

  @mapNumber('Insider Own')
  @prop()
  InsiderOwn_Pct?: number;

  @mapNumber('Insider Trans')
  @prop()
  InsiderTrans_Pct?: number;

  @mapNumber('Inst Own')
  @prop()
  InstOwn_Pct?: number;

  @mapNumber('Inst Trans')
  @prop()
  InstTrans_Pct?: number;

  @mapNumber('ROA')
  @prop()
  ROA_Pct?: number;

  @mapNumber('ROE')
  @prop()
  ROE_Pct?: number;

  @mapNumber('ROI')
  @prop()
  ROI_Pct?: number;

  @mapNumber('Gross Margin')
  @prop()
  GrossMargin_Pct?: number;

  @mapNumber('Oper. Margin')
  @prop()
  OperMargin_Pct?: number;

  @mapNumber('Profit Margin')
  @prop()
  ProfitMargin_Pct?: number;

  @mapNumber('Payout')
  @prop()
  Payout_Pct?: number;

  @mapNumber('SMA200')
  @prop()
  SMA200_Pct?: number;

  @mapNumber('Shs Outstand')
  @prop()
  ShsOutstand?: number;

  @mapNumber('Shs Float')
  @prop()
  ShsFloat?: number;

  @mapNumber('Short Float')
  @prop()
  ShortFloat_Pct?: number;

  @mapNumber('Short Ratio')
  @prop()
  ShortRatio?: number;

  @mapNumber('Target Price')
  @prop()
  TargetPrice?: number;

  @mapRange('52W Range', 0)
  @prop()
  FiveTwoWeekRangeLow?: number;

  @mapRange('52W Range', 1)
  @prop()
  FiveTwoWeekRangeHigh?: number;

  @mapNumber('52W High')
  @prop()
  FiveTwoWeekHigh_Pct?: number;

  @mapNumber('52W Low')
  @prop()
  FiveTwoWeekLow_Pct?: number;

  @mapNumber('RSI (14)')
  @prop()
  RSI14?: number;

  @mapNumber('Rel Volume')
  @prop()
  RelVolume?: number;

  @mapNumber('Avg Volume')
  @prop()
  AvgVolume?: number;

  @mapNumber('Volume')
  @prop()
  Volume?: number;

  @mapNumber('Perf Week')
  @prop()
  PerfWeek_Pct?: number;

  @mapNumber('Perf Month')
  @prop()
  PerfMonth_Pct?: number;

  @mapNumber('Perf Quarter')
  @prop()
  PerfQuarter_Pct?: number;

  @mapNumber('Perf Half Y')
  @prop()
  PerfHalfY_Pct?: number;

  @mapNumber('Perf Year')
  @prop()
  PerfY_Pct?: number;

  @mapNumber('Perf YTD')
  @prop()
  PerfYTD_Pct?: number;

  @mapNumber('Beta')
  @prop()
  Beta?: number;

  @mapNumber('ATR')
  @prop()
  ATR?: number;

  @mapRange('Volatility', 0)
  @prop()
  VolatilityLow_Pct?: number;

  @mapRange('Volatility', 1)
  @prop()
  VolatilityHigh_Pct?: number;

  @mapNumber('Prev Close')
  @prop()
  PrevClose?: number;

  @mapNumber('Price')
  @prop()
  Price?: number;

  @mapNumber('Change')
  @prop()
  Change_Pct?: number;

  @prop({ type: () => [FinVizRating] })
  Ratings?: FinVizRating[];

  parseNumber(numberString: string): number {
    numberString = numberString.trim();

    let multiplier = 1;
    let formattedString = numberString;

    if (numberString.indexOf('B') > -1) {
      multiplier = 10e9;
      formattedString = numberString.replace('B', '');
    } else if (numberString.indexOf('M') > -1) {
      multiplier = 10e6;
      formattedString = numberString.replace('M', '');
    } else if (numberString.indexOf('%') > -1) {
      formattedString = numberString.replace('%', '');
    }

    formattedString = formattedString.replace('$', '');
    formattedString = formattedString.replace(/,/gm, '');

    const numberValue = parseFloat(formattedString.trim());
    return numberValue * multiplier;
  }

  parseBoolean(booleanString: string): boolean {
    return booleanString.toLowerCase() == 'yes' ? true : false;
  }

  parseRange(rangeString: string): Array<any> {
    if (rangeString.indexOf('-') > 0) {
      return rangeString.replace(/" "/, '').split('-');
    } else if (rangeString.indexOf(' ') > 0) {
      return rangeString.split(' ');
    }

    return Array<number>(2);
  }
}
