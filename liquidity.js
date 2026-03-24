function renderLiquidity() {
  document.getElementById("app").innerHTML = `
    <div class="card">
      <h2>Add Liquidity</h2>
      <input id="tokenA" placeholder="Token A"/>
      <input id="tokenB" placeholder="Token B"/>
      <button onclick="addLiquidity()">Add</button>
    </div>
  `;
}

function addLiquidity() {
  alert("Connect to router addLiquidity()");
}
