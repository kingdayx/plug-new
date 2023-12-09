import { MetaMaskWallet } from "@thirdweb-dev/wallets";

const wallet = new MetaMaskWallet();

document
  .getElementById("open")
  .addEventListener(
    "click",
    () => wallet.connect(),
    console.log("connect", wallet)
  );

// 5. Alternatively use w3m component buttons (see index.html)
