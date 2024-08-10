const hre = require("hardhat");

const CONTRACT_ADDR = "0xBEF50E5Ce0217d26bf1B2357Ca5A099172822BC8";

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);

  const tx = await contract.attempt();

  await tx.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
