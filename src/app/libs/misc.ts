import getSymbolFromCurrency from "currency-symbol-map";

export function Gsh2(n:any) {
    return (n + "").split(".")[0]
  }
  export function Gsh(n:any) {
    return (n + "").split(".")[1]
  }
  export function FormatCurrency(value:number, currency?:string) {
    console.log(Gsh2(4000.7000)?.length > 3, 'jllllhkdlsll')
    return currency ? Gsh(value)?.length > 3 ? getSymbolFromCurrency(currency) + Gsh2(`${value}`).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.' + Gsh(value) : getSymbolFromCurrency(currency) + `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : Gsh(value)?.length > 3 ? Gsh2(`${value}`).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.' + Gsh(value) : `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }