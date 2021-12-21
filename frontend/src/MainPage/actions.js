import {pinJSONToIPFS} from "../Dapp/pinata";
import axios from "axios";

require('dotenv').config();


const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const {createAlchemyWeb3} = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const BN = require('bn.js');

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


export const mintNFT = async () => {

    const rsp = await getMetadata();
    const tokenURI = rsp.data['ipfs'];
    //load smart contract
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);//loadContract();
    //set up your Ethereum transaction
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        'data': window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI(), //make call to NFT smart contract
        value: new BN(web3.utils.toWei('0.03', 'ether', 16)).toString('hex')

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

export const getMetadata = async () => {

    const rsp = await axios.get('http://127.0.0.1:8000/pinata/get-random-metafile')
    console.log(rsp)
    return rsp
}

