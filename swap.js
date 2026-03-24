const ROUTER = "YOUR_ROUTER";
const CROC = "YOUR_TOKEN";
const WETH = "YOUR_WETH";

function renderSwap() {
  document.getElementById("app").innerHTML = `
    <div class="card">
      <h2>Swap</h2>
      <input id="swapAmount" placeholder="ETH amount"/>
      <button onclick="swap()">Swap</button>
    </div>
  `;
}

async function swap() {
  const amount = document.getElementById("swapAmount").value;

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const abi = [
    "function swapExactETHForTokens(uint amountOutMin, address[] path, address to, uint deadline) payable"
  ];

  const contract = new ethers.Contract(ROUTER, abi, signer);

  const tx = await contract.swapExactETHForTokens(
    0,
    [WETH, CROC],
    userAddress,
    Math.floor(Date.now()/1000)+600,
    { value: ethers.parseEther(amount) }
  );

  await tx.wait();
  alert("Swap success");
}
