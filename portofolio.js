function renderPortfolio() {
  document.getElementById("app").innerHTML = `
    <div class="card">
      <h2>Portfolio</h2>
      <p id="balance">Loading...</p>
    </div>
  `;

  loadBalance();
}

async function loadBalance() {
  const provider = new ethers.BrowserProvider(window.ethereum);

  const balance = await provider.getBalance(userAddress);

  document.getElementById("balance").innerText =
    "ETH: " + ethers.formatEther(balance);
}
