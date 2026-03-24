const ROUTER = "YOUR_ROUTER";
const TOKEN_A = "CROC_ADDRESS";
const TOKEN_B = "USDT_ADDRESS";

async function addLiquidityReal() {
  const amountA = document.getElementById("tokenA").value;
  const amountB = document.getElementById("tokenB").value;

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const abi = [
    "function addLiquidity(address tokenA,address tokenB,uint amountADesired,uint amountBDesired,uint amountAMin,uint amountBMin,address to,uint deadline)"
  ];

  const contract = new ethers.Contract(ROUTER, abi, signer);

  const tx = await contract.addLiquidity(
    TOKEN_A,
    TOKEN_B,
    ethers.parseUnits(amountA, 18),
    ethers.parseUnits(amountB, 18),
    0,
    0,
    await signer.getAddress(),
    Math.floor(Date.now()/1000)+600
  );

  await tx.wait();
  alert("Liquidity Added 🔥");
}
