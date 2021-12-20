const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
    it("Happy day test!", async function () {
        const [owner] = await ethers.getSigners();
        const Nft = await ethers.getContractFactory("RogueReindeerNFT");

        const hardHatNft = await Nft.deploy();

        const ret = await hardHatNft.mintNFT(owner.address, 'https://www.google.com/search?q=pinata&oq=pinata&aqs=chrome.0.69i59l4j69i60l4.2689j0j7&sourceid=chrome&ie=UTF-8')
        console.log(ret)


    });
});