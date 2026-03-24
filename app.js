let userAddress = "";

async function connectWallet() {
  if (!window.ethereum) return alert("Install MetaMask");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  userAddress = accounts[0];

  alert("Connected: " + userAddress);
}

function showPage(page) {
  if (page === "swap") renderSwap();
  if (page === "staking") renderStaking();
  if (page === "liquidity") renderLiquidity();
  if (page === "portfolio") renderPortfolio();
}
