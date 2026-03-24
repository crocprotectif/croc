const CONTRACT = "YOUR_CONTRACT";

function renderStaking() {
  document.getElementById("app").innerHTML = `
    <div class="card">
      <h2>Staking</h2>
      <input id="stakeAmount" placeholder="Amount"/>
      <select id="lock">
        <option value="7">7 Days</option>
        <option value="30">30 Days</option>
        <option value="90">90 Days</option>
      </select>
      <button onclick="stake()">Stake</button>
      <button onclick="unstake()">Unstake</button>
    </div>
  `;
}

async function stake() {
  const amount = document.getElementById("stakeAmount").value;
  const lock = document.getElementById("lock").value;

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const abi = [
    "function stake(uint256 amount,uint256 lockDays)"
  ];

  const contract = new ethers.Contract(CONTRACT, abi, signer);

  const tx = await contract.stake(
    BigInt(amount) * BigInt(1e18),
    lock
  );

  await tx.wait();
  alert("Staked");
}

async function unstake() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const abi = ["function unstake()"];
  const contract = new ethers.Contract(CONTRACT, abi, signer);

  const tx = await contract.unstake();
  await tx.wait();

  alert("Unstaked");
}
