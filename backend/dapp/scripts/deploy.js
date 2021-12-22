const { ethers } = require("hardhat")
async function main() {
  const RRNFT = await ethers.getContractFactory("RRNFTContract")

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await RRNFT.deploy()
  console.log("Contract deployed to address:", myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

