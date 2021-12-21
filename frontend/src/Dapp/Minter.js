import '../assets/css/dapp.css'
import {useEffect, useState} from "react";
import {getMetadata, mintNFT} from "../MainPage/actions";
import {getCidData} from "./pinata";

const Minter = (props) => {

    //State variables
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("test");
    const [description, setDescription] = useState("test");
    const [url, setURL] = useState("https://gateway.pinata.cloud/ipfs/Qmao2kFXXuECHxLCfXa4y1ydVt3hrRP1jWwH51BgU2QpNt");

    useEffect(async () => { //TODO: implement

    }, []);

    const connectWalletPressed = async () => { //TODO: implement

    };

    const onMintPressed = async () => { //TODO: implement
        const {status} = await mintNFT(url, name, description);
        setStatus(status);
    };

    return (
        <div className={'App'}>
            <div className="Minter">
                <button id="walletButton" onClick={connectWalletPressed}>
                    {walletAddress.length > 0 ? (
                        "Connected: " +
                        String(walletAddress).substring(0, 6) +
                        "..." +
                        String(walletAddress).substring(38)
                    ) : (
                        <span>Connect Wallet</span>
                    )}
                </button>

                <br></br>
                <h1 id="title">🧙‍♂️ Alchemy NFT Minter</h1>
                <p>
                    Simply add your asset's link, name, and description, then press "Mint."
                </p>
                <form>
                    <h2>🖼 Link to asset: </h2>
                    <input
                        type="text"
                        placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
                        onChange={(event) => setURL(event.target.value)}
                    />
                    <h2>🤔 Name: </h2>
                    <input
                        type="text"
                        placeholder="e.g. My first NFT!"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <h2>✍️ Description: </h2>
                    <input
                        type="text"
                        placeholder="e.g. Even cooler than cryptokitties ;)"
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </form>
                <button  onClick={mintNFT}>
                    Mint NFT
                </button>
                <button id="mintButton" onClick={() => getCidData('QmdFYGdoSosMKQoVWrEn99p8SGupKooN5BjerG2c4cej2E')}>
                    CID
                </button>
                <p id="status">
                    {status}
                </p>
            </div>
        </div>
    );
};

export default Minter;
