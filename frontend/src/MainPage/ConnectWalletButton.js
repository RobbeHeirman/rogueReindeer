import {connectWallet} from "./actions";
import {useEffect, useState} from "react";

const ConnectWalletButton = () => {

    const [walletAddress, setWalledAddress] = useState("");

    useEffect(
         () =>{
             (async () => {
            const {address} = await connectWallet('eth_accounts');
            setWalledAddress(address ? address : '');
            addWalletListener();})()
        }
        , [])


    const addWalletListener = () => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWalledAddress(accounts[0]);
                } else {
                    setWalledAddress("");
                }
            });
        }
    }

    const connectWalletPressed = async (e) => {
        e.preventDefault();
        const walletResponse = await connectWallet();
        setWalledAddress(walletResponse.address);
    }

    return (
        <button onClick={connectWalletPressed}
                className={'btn btn-primary'}>{walletAddress ? 'Connected!': 'Connect'}</button>
    )
}

export default ConnectWalletButton