function loadChart() {
  new TradingView.widget({
    container_id: "chart",
    symbol: "BINANCE:ZILAUSDT",
    interval: "15",
    theme: "dark",
    style: "1",
    locale: "en"
  });
}
