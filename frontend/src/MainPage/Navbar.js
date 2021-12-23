// import './assets/css/NavBar.css'
// noinspection HtmlUnknownAnchorTarget

import logo from '../assets/images/Logo.png'
import {connectWallet} from "./actions";
import {useEffect, useState} from "react";

const Navbar = () => {

    // const [walletConnectStatus, setWalletConnectStatus] = useState("");
    const [walletAddress, setWalledAddress] = useState("");

    useEffect(
         () =>{
             (async () =>{
            const {address} = await connectWallet('eth_accounts');
            setWalledAddress(address ? address : '');
            // setWalletConnectStatus(status);
            addWalletListener() })();
        }
    , [])

    const connectWalletPressed = async (e) => {
        e.preventDefault();
        const walletResponse = await connectWallet();
        // setWalletConnectStatus(walletResponse.status);
        setWalledAddress(walletResponse.address);
    }

    const addWalletListener = () => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWalledAddress(accounts[0]);
                    // setWalletConnectStatus("👆🏽 Write a message in the text-field above.");
                } else {
                    setWalledAddress("");
                    // setWalletConnectStatus("🦊 Connect to Metamask using the top right button.");
                }
            });
        } else {
            // setWalletConnectStatus(
            //     <p>
            //         {" "}
            //         🦊{" "}
            //         <a target="_blank" href={`https://metamask.io/download.html`}>
            //             You must install Metamask, a virtual Ethereum wallet, in your
            //             browser.
            //         </a>
            //     </p>
            // );
        }
    }
    return (
        <div className="header-main">
            <div className="header-container container">
                <div className="header-wrap">
                    <div className="header-logo logo">
                        <a href="/" className="logo-link">
                            <img className='logo-dark' src={logo} alt="logo"/>
                            <img className="logo-light" src={logo} alt="logo"/>
                        </a>
                    </div>

                    <div className="header-nav-toggle">
                        <a
                            href="/#"
                            className="navbar-toggle"
                            data-menu-toggle="example-menu-04"
                        >
                            <div className="toggle-line">
                                <span/>
                            </div>
                        </a>
                    </div>

                    <div className="header-navbar header-navbar-s1">
                        <nav className="header-menu" id="example-menu-04">
                            <ul className="menu menu-s2">
                                <li className="menu-item">
                                    <a className="menu-link nav-link" href="/">Home</a>
                                </li>

                                <li className="menu-item">
                                    <a className="menu-link nav-link" href="/#about"
                                    >About</a
                                    >
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link nav-link" href="/#whyMint"
                                    >Why mint?</a
                                    >
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link nav-link" href="/#roadmap"
                                    >Roadmap</a
                                    >
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link nav-link" href="/#faq"
                                    >FAQ</a
                                    >
                                </li>
                                <li className="menu-item">
                                    <a target="_blank" href="https://discord.gg/QrFNGhKVDV"
                                       rel="noreferrer"
                                    ><em className="fab fa-discord"/>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://twitter.com/Rogue_Reindeer/"
                                    ><em className="fab fa-twitter"/>
                                    </a>
                                </li>
                                <li className={"menu-item"}>
                                    {walletAddress.length > 0 ? (
                                        <button className={"btn btn-primary"} onClick={connectWalletPressed}>{
                                            "Connected: " +
                                            String(walletAddress).substring(0, 6) +
                                            "..." +
                                            String(walletAddress).substring(38)
                                        }
                                        </button>
                                    ) : (
                                        <button onClick={connectWalletPressed}
                                                className={'btn btn-primary'}>Connect</button>
                                    )}

                                </li>
                            </ul>
                            <ul className="menu-btns">
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    )
}
// BUTTON PAS TOEVOEGEN ALS HEM WERKT OF HET ZORGT VOOR VERWARRING

export default Navbar