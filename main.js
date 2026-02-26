
const date = "202408";
const time_period = "m";

const nbuUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp");

nbuUrl.searchParams.set("date", date);
nbuUrl.searchParams.set("period", time_period);
nbuUrl.searchParams.set("json", "");

console.log(nbuUrl.toString());