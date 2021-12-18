import {pinJSONToIPFS} from "../Dapp/pinata";
require('dotenv').config();

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("../Dapp/artifacts/contracts/RogueReindeerNFT.sol/RogueReindeerNFT.json").abi;
const contractAddress = "0x05268471fd0C22F446dfcC00a58BC2B58e29eE7e";
/**
 *
 * @param method the method we call the etherium request
 *              eth_requestAccounts: Will open the login screen
 *              eth_accounts: Will simply look if we are connected.
 * @returns {Promise<{address: string, status: string}|{address: string, status: JSX.Element}|{address, status: string}>}
 */
export const connectWallet = async (method = 'eth_requestAccounts') => {
    console.log(method)
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: method,
            });

            return {
                status: "👆🏽 Write a message in the text-field above.",
                address: addressArray[0],
            };
        } catch (err) {
            console.log(err.message)
            return {

                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
          <p>
            {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
            ),
        };
    }
};



export const mintNFT = async(url, name, description) => {

    //error handling
    if (url.trim() === "" || (name.trim() === "" || description.trim() === "")) {
        return {
            success: false,
            status: "❗Please make sure all fields are completed before minting.",
        }
    }

    //make metadata
    const metadata = new Object();
    metadata.name = name;
    metadata.image = url;
    metadata.description = description;

    //pinata pin request
    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
        return {
            success: false,
            status: "😢 Something went wrong while uploading your tokenURI.",
        }
    }
    const tokenURI = pinataResponse.pinataUrl;

    //load smart contract
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);//loadContract();

    //set up your Ethereum transaction
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        'data': window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI(), //make call to NFT smart contract
        amount: 0.004
    };

    //sign transaction via Metamask
    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
        }
    } catch (error) {
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
}

