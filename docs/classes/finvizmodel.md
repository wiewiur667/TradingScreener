**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / FinVizModel

# Class: FinVizModel

## Hierarchy

* [ScreenerModelBase](screenermodelbase.md)

  ↳ **FinVizModel**

## Implements

* [IScraperModel](../interfaces/iscrapermodel.md)
* [IScrapeModel](../interfaces/iscrapemodel.md)

## Index

### Properties

* [ATR](finvizmodel.md#atr)
* [AvgVolume](finvizmodel.md#avgvolume)
* [Beta](finvizmodel.md#beta)
* [Book\_Sh](finvizmodel.md#book_sh)
* [Cash\_Sh](finvizmodel.md#cash_sh)
* [Change\_Pct](finvizmodel.md#change_pct)
* [CurrentRatio](finvizmodel.md#currentratio)
* [Debt\_Eq](finvizmodel.md#debt_eq)
* [Dividend](finvizmodel.md#dividend)
* [Dividend\_Pct](finvizmodel.md#dividend_pct)
* [EPS](finvizmodel.md#eps)
* [EPSNext5Y\_Pct](finvizmodel.md#epsnext5y_pct)
* [EPSNextQ](finvizmodel.md#epsnextq)
* [EPSNextY](finvizmodel.md#epsnexty)
* [EPSNextY\_Pct](finvizmodel.md#epsnexty_pct)
* [EPSPast5Y\_Pct](finvizmodel.md#epspast5y_pct)
* [EPSQ\_Q\_Pct](finvizmodel.md#epsq_q_pct)
* [EPSThisY\_Pct](finvizmodel.md#epsthisy_pct)
* [Earnings](finvizmodel.md#earnings)
* [Employees](finvizmodel.md#employees)
* [FiveTwoWeekHigh\_Pct](finvizmodel.md#fivetwoweekhigh_pct)
* [FiveTwoWeekLow\_Pct](finvizmodel.md#fivetwoweeklow_pct)
* [FiveTwoWeekRangeHigh](finvizmodel.md#fivetwoweekrangehigh)
* [FiveTwoWeekRangeLow](finvizmodel.md#fivetwoweekrangelow)
* [ForwardP\_E](finvizmodel.md#forwardp_e)
* [GrossMargin\_Pct](finvizmodel.md#grossmargin_pct)
* [Income](finvizmodel.md#income)
* [Index](finvizmodel.md#index)
* [InsiderOwn\_Pct](finvizmodel.md#insiderown_pct)
* [InsiderTrans\_Pct](finvizmodel.md#insidertrans_pct)
* [InstOwn\_Pct](finvizmodel.md#instown_pct)
* [InstTrans\_Pct](finvizmodel.md#insttrans_pct)
* [LTDebt\_Eq](finvizmodel.md#ltdebt_eq)
* [MarketCap](finvizmodel.md#marketcap)
* [OperMargin\_Pct](finvizmodel.md#opermargin_pct)
* [Optionable](finvizmodel.md#optionable)
* [PEG](finvizmodel.md#peg)
* [P\_B](finvizmodel.md#p_b)
* [P\_C](finvizmodel.md#p_c)
* [P\_E](finvizmodel.md#p_e)
* [P\_FCF](finvizmodel.md#p_fcf)
* [P\_S](finvizmodel.md#p_s)
* [Payout\_Pct](finvizmodel.md#payout_pct)
* [PerfHalfY\_Pct](finvizmodel.md#perfhalfy_pct)
* [PerfMonth\_Pct](finvizmodel.md#perfmonth_pct)
* [PerfQuarter\_Pct](finvizmodel.md#perfquarter_pct)
* [PerfWeek\_Pct](finvizmodel.md#perfweek_pct)
* [PerfYTD\_Pct](finvizmodel.md#perfytd_pct)
* [PerfY\_Pct](finvizmodel.md#perfy_pct)
* [PrevClose](finvizmodel.md#prevclose)
* [Price](finvizmodel.md#price)
* [ProfitMargin\_Pct](finvizmodel.md#profitmargin_pct)
* [QuickRatio](finvizmodel.md#quickratio)
* [ROA\_Pct](finvizmodel.md#roa_pct)
* [ROE\_Pct](finvizmodel.md#roe_pct)
* [ROI\_Pct](finvizmodel.md#roi_pct)
* [RSI14](finvizmodel.md#rsi14)
* [Ratings](finvizmodel.md#ratings)
* [Recom](finvizmodel.md#recom)
* [RelVolume](finvizmodel.md#relvolume)
* [SMA200\_Pct](finvizmodel.md#sma200_pct)
* [SMA20\_Pct](finvizmodel.md#sma20_pct)
* [SMA50\_Pct](finvizmodel.md#sma50_pct)
* [Sales](finvizmodel.md#sales)
* [SalesPast5Y\_Pct](finvizmodel.md#salespast5y_pct)
* [SalesQ\_Q\_Pct](finvizmodel.md#salesq_q_pct)
* [ScreenDate](finvizmodel.md#screendate)
* [ScreenerName](finvizmodel.md#screenername)
* [ShortFloat\_Pct](finvizmodel.md#shortfloat_pct)
* [ShortRatio](finvizmodel.md#shortratio)
* [Shortable](finvizmodel.md#shortable)
* [ShsFloat](finvizmodel.md#shsfloat)
* [ShsOutstand](finvizmodel.md#shsoutstand)
* [Symbol](finvizmodel.md#symbol)
* [TargetPrice](finvizmodel.md#targetprice)
* [VolatilityHigh\_Pct](finvizmodel.md#volatilityhigh_pct)
* [VolatilityLow\_Pct](finvizmodel.md#volatilitylow_pct)
* [Volume](finvizmodel.md#volume)

### Methods

* [map](finvizmodel.md#map)
* [parseBoolean](finvizmodel.md#parseboolean)
* [parseNumber](finvizmodel.md#parsenumber)
* [parseRange](finvizmodel.md#parserange)
* [store](finvizmodel.md#store)

## Properties

### ATR

• `Optional` **ATR**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:301](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L301)*

___

### AvgVolume

• `Optional` **AvgVolume**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:265](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L265)*

___

### Beta

• `Optional` **Beta**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:297](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L297)*

___

### Book\_Sh

• `Optional` **Book\_Sh**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:45](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L45)*

___

### Cash\_Sh

• `Optional` **Cash\_Sh**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:49](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L49)*

___

### Change\_Pct

• `Optional` **Change\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:321](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L321)*

___

### CurrentRatio

• `Optional` **CurrentRatio**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:109](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L109)*

___

### Debt\_Eq

• `Optional` **Debt\_Eq**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:113](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L113)*

___

### Dividend

• `Optional` **Dividend**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:53](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L53)*

___

### Dividend\_Pct

• `Optional` **Dividend\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:57](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L57)*

___

### EPS

• `Optional` **EPS**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:125](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L125)*

___

### EPSNext5Y\_Pct

• `Optional` **EPSNext5Y\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:145](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L145)*

___

### EPSNextQ

• `Optional` **EPSNextQ**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:133](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L133)*

___

### EPSNextY

• `Optional` **EPSNextY**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:129](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L129)*

___

### EPSNextY\_Pct

• `Optional` **EPSNextY\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:141](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L141)*

___

### EPSPast5Y\_Pct

• `Optional` **EPSPast5Y\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:149](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L149)*

___

### EPSQ\_Q\_Pct

• `Optional` **EPSQ\_Q\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:161](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L161)*

___

### EPSThisY\_Pct

• `Optional` **EPSThisY\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:137](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L137)*

___

### Earnings

• `Optional` **Earnings**: undefined \| string

*Defined in [src/plugins/finviz/model/finviz.model.ts:165](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L165)*

___

### Employees

• `Optional` **Employees**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:61](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L61)*

___

### FiveTwoWeekHigh\_Pct

• `Optional` **FiveTwoWeekHigh\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:249](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L249)*

___

### FiveTwoWeekLow\_Pct

• `Optional` **FiveTwoWeekLow\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:253](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L253)*

___

### FiveTwoWeekRangeHigh

• `Optional` **FiveTwoWeekRangeHigh**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:245](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L245)*

___

### FiveTwoWeekRangeLow

• `Optional` **FiveTwoWeekRangeLow**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:241](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L241)*

___

### ForwardP\_E

• `Optional` **ForwardP\_E**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:81](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L81)*

___

### GrossMargin\_Pct

• `Optional` **GrossMargin\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:201](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L201)*

___

### Income

• `Optional` **Income**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:37](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L37)*

___

### Index

• `Optional` **Index**: undefined \| string

*Defined in [src/plugins/finviz/model/finviz.model.ts:29](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L29)*

___

### InsiderOwn\_Pct

• `Optional` **InsiderOwn\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:173](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L173)*

___

### InsiderTrans\_Pct

• `Optional` **InsiderTrans\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:177](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L177)*

___

### InstOwn\_Pct

• `Optional` **InstOwn\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:181](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L181)*

___

### InstTrans\_Pct

• `Optional` **InstTrans\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:185](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L185)*

___

### LTDebt\_Eq

• `Optional` **LTDebt\_Eq**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:117](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L117)*

___

### MarketCap

• `Optional` **MarketCap**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:33](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L33)*

___

### OperMargin\_Pct

• `Optional` **OperMargin\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:205](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L205)*

___

### Optionable

• `Optional` **Optionable**: undefined \| false \| true

*Defined in [src/plugins/finviz/model/finviz.model.ts:65](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L65)*

___

### PEG

• `Optional` **PEG**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:85](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L85)*

___

### P\_B

• `Optional` **P\_B**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:93](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L93)*

___

### P\_C

• `Optional` **P\_C**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:97](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L97)*

___

### P\_E

• `Optional` **P\_E**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:77](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L77)*

___

### P\_FCF

• `Optional` **P\_FCF**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:101](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L101)*

___

### P\_S

• `Optional` **P\_S**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:89](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L89)*

___

### Payout\_Pct

• `Optional` **Payout\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:213](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L213)*

___

### PerfHalfY\_Pct

• `Optional` **PerfHalfY\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:285](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L285)*

___

### PerfMonth\_Pct

• `Optional` **PerfMonth\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:277](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L277)*

___

### PerfQuarter\_Pct

• `Optional` **PerfQuarter\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:281](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L281)*

___

### PerfWeek\_Pct

• `Optional` **PerfWeek\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:273](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L273)*

___

### PerfYTD\_Pct

• `Optional` **PerfYTD\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:293](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L293)*

___

### PerfY\_Pct

• `Optional` **PerfY\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:289](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L289)*

___

### PrevClose

• `Optional` **PrevClose**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:313](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L313)*

___

### Price

• `Optional` **Price**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:317](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L317)*

___

### ProfitMargin\_Pct

• `Optional` **ProfitMargin\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:209](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L209)*

___

### QuickRatio

• `Optional` **QuickRatio**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:105](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L105)*

___

### ROA\_Pct

• `Optional` **ROA\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:189](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L189)*

___

### ROE\_Pct

• `Optional` **ROE\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:193](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L193)*

___

### ROI\_Pct

• `Optional` **ROI\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:197](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L197)*

___

### RSI14

• `Optional` **RSI14**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:257](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L257)*

___

### Ratings

• `Optional` **Ratings**: [FinVizRating](finvizrating.md)[]

*Defined in [src/plugins/finviz/model/finviz.model.ts:324](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L324)*

___

### Recom

• `Optional` **Recom**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:73](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L73)*

___

### RelVolume

• `Optional` **RelVolume**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:261](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L261)*

___

### SMA200\_Pct

• `Optional` **SMA200\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:217](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L217)*

___

### SMA20\_Pct

• `Optional` **SMA20\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:121](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L121)*

___

### SMA50\_Pct

• `Optional` **SMA50\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:169](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L169)*

___

### Sales

• `Optional` **Sales**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:41](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L41)*

___

### SalesPast5Y\_Pct

• `Optional` **SalesPast5Y\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:153](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L153)*

___

### SalesQ\_Q\_Pct

• `Optional` **SalesQ\_Q\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:157](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L157)*

___

### ScreenDate

• `Optional` **ScreenDate**: [Date](finvizrating.md#date)

*Implementation of [IScrapeModel](../interfaces/iscrapemodel.md).[ScreenDate](../interfaces/iscrapemodel.md#screendate)*

*Overrides [ScreenerModelBase](screenermodelbase.md).[ScreenDate](screenermodelbase.md#screendate)*

*Defined in [src/plugins/finviz/model/finviz.model.ts:25](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L25)*

___

### ScreenerName

• `Optional` **ScreenerName**: undefined \| string

*Overrides [ScreenerModelBase](screenermodelbase.md).[ScreenerName](screenermodelbase.md#screenername)*

*Defined in [src/plugins/finviz/model/finviz.model.ts:19](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L19)*

___

### ShortFloat\_Pct

• `Optional` **ShortFloat\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:229](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L229)*

___

### ShortRatio

• `Optional` **ShortRatio**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:233](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L233)*

___

### Shortable

• `Optional` **Shortable**: undefined \| false \| true

*Defined in [src/plugins/finviz/model/finviz.model.ts:69](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L69)*

___

### ShsFloat

• `Optional` **ShsFloat**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:225](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L225)*

___

### ShsOutstand

• `Optional` **ShsOutstand**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:221](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L221)*

___

### Symbol

• `Optional` **Symbol**: undefined \| string

*Implementation of [IScrapeModel](../interfaces/iscrapemodel.md).[Symbol](../interfaces/iscrapemodel.md#symbol)*

*Overrides [ScreenerModelBase](screenermodelbase.md).[Symbol](screenermodelbase.md#symbol)*

*Defined in [src/plugins/finviz/model/finviz.model.ts:22](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L22)*

___

### TargetPrice

• `Optional` **TargetPrice**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:237](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L237)*

___

### VolatilityHigh\_Pct

• `Optional` **VolatilityHigh\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:309](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L309)*

___

### VolatilityLow\_Pct

• `Optional` **VolatilityLow\_Pct**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:305](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L305)*

___

### Volume

• `Optional` **Volume**: undefined \| number

*Defined in [src/plugins/finviz/model/finviz.model.ts:269](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L269)*

## Methods

### map

▸ **map**(`data`: Map\<string, any>): void

*Implementation of [IScraperModel](../interfaces/iscrapermodel.md)*

*Overrides [ScreenerModelBase](screenermodelbase.md).[map](screenermodelbase.md#map)*

*Defined in [src/plugins/finviz/model/finviz.model.ts:326](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L326)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | Map\<string, any> |

**Returns:** void

___

### parseBoolean

▸ **parseBoolean**(`booleanString`: string): boolean

*Implementation of [IScrapeModel](../interfaces/iscrapemodel.md)*

*Defined in [src/plugins/finviz/model/finviz.model.ts:380](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L380)*

#### Parameters:

Name | Type |
------ | ------ |
`booleanString` | string |

**Returns:** boolean

___

### parseNumber

▸ **parseNumber**(`numberString`: string): number

*Implementation of [IScrapeModel](../interfaces/iscrapemodel.md)*

*Defined in [src/plugins/finviz/model/finviz.model.ts:353](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L353)*

#### Parameters:

Name | Type |
------ | ------ |
`numberString` | string |

**Returns:** number

___

### parseRange

▸ **parseRange**(`rangeString`: string): Array\<any>

*Implementation of [IScrapeModel](../interfaces/iscrapemodel.md)*

*Defined in [src/plugins/finviz/model/finviz.model.ts:384](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L384)*

#### Parameters:

Name | Type |
------ | ------ |
`rangeString` | string |

**Returns:** Array\<any>

___

### store

▸ **store**\<FinVizModel>(`this`: DocumentType\<FinVizModel>): void

*Implementation of [IScraperModel](../interfaces/iscrapermodel.md)*

*Overrides [ScreenerModelBase](screenermodelbase.md).[store](screenermodelbase.md#store)*

*Defined in [src/plugins/finviz/model/finviz.model.ts:14](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.model.ts#L14)*

#### Type parameters:

Name |
------ |
`FinVizModel` |

#### Parameters:

Name | Type |
------ | ------ |
`this` | DocumentType\<FinVizModel> |

**Returns:** void
