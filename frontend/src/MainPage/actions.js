import axios from "axios";


require('dotenv').config();

const alchemyKey = "https://eth-mainnet.alchemyapi.io/v2/9bEhlwbJ8hSRiC1fDQrG0Ff3yuD7Xxm_"

const {createAlchemyWeb3} = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const BN = require('bn.js');

const contractABI = require("../Dapp/artifacts/contracts/RRNFTContract.sol/RogueReindeerNFTS.json").abi;
const contractAddress = "0xf6649afdcf862aab64ad0681bec71ccb224cc4fc";


/**
 *
 * @param method the method we call the etherium request
 *              eth_requestAccounts: Will open the login screen
 *              eth_accounts: Will simply look if we are connected.
 * @returns {Promise<{address: string, status: string}|{address: string, status: JSX.Element}|{address, status: string}>}
 */
export const connectWallet = async (method = 'eth_requestAccounts') => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: method,
            });

            return {
                status: "Success",
                address: addressArray[0],
            };
        } catch (err) {
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
              <a target="_blank" rel="noopener noreferrer" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
            ),
        };
    }
};

export const count = async () => {

    const contract = await new web3.eth.Contract(contractABI, contractAddress);
    const params = {
        'to': contractAddress,
        'data': contract.methods.totalSupply().encodeABI()
    }
    try {
        const answer = await window.ethereum.request({
            method: 'eth_call',
            params: [params, 'latest']
        })


        return web3.utils.hexToNumberString(answer);
    } catch {
        return 'Unknown'
    }
}
export const mintNFT = async (amount) => {
    //load smart contract
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);//loadContract();

    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.

        'data': window.contract.methods.mint(window.ethereum.selectedAddress, amount).encodeABI(), //make call to NFT smart contract
        value: new BN(web3.utils.toWei((0.03 * amount).toString(10),
            'ether')).toString('hex')
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
            status: "✅ Transaction hash" + txHash
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

