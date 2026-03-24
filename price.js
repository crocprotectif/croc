async function loadPrice() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  );

  const data = await res.json();

  document.getElementById("price").innerText =
    "ETH Price: $" + data.ethereum.usd;
}

setInterval(loadPrice, 5000);
