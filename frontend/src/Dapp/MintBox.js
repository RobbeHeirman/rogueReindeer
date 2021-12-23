import NumSpinBox from "../MainPage/NumSpinBox";
import {useEffect, useState} from "react";
import ethImg from "../assets/images/etherium.png"
import ConnectWalletButton from "../MainPage/ConnectWalletButton";
import {connectWallet, count, mintNFT} from "../MainPage/actions";

const MintBox = () => {
    const dl = Date.UTC(2021, 12, 23, 18, 0, 0);
    const today = Date.now()
    return today > dl ? <Minter/> : <MinInfo/>;
}

const MinInfo = () => {

    return (
        <div id="mint-box" className="cpn-btns">
            <div className="token-status token-status-s5 bg-theme-alt round no-bd">
                <p>Mint date: 23 december</p>
                <button className="btn btn-grad btn-round">23 december 2021 07:00 PM UTC +1</button>
            </div>
        </div>
    )
}


const Minter = () => {
    const [connected, setConnect] = useState(false);

    const [mintStatus, setMintStatus] = useState('')
    const [value, setValue] = useState(1);
    const [mintAmount, SetMintAmount] = useState('Unknown');
    const localMint =  () => {
        (async () =>{
        const {status} = await mintNFT(value)
        setMintStatus(status);})()
    }
    useEffect(() => {
        count().then((val) => SetMintAmount(val ?  val: 'unknown'))
        addWalletListener().then();
    }, [])
    const addWalletListener = async () => {
        const {address} = await connectWallet('eth_accounts');
        setConnect(address.length > 0)
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setConnect(true);
                } else {
                    setConnect(false);
                }
            });
        }
    }

    let render;
    if(connected) {
        render = <>
            <div className={'input-group'}>
                <label>How many do you want?</label>
                <NumSpinBox qty={value}
                onIncrement={() => setValue((prevState => prevState + 1 <= 10 ? prevState + 1 : prevState))}
                onDecrement={() => setValue((prevState => prevState - 1 > 0 ? prevState - 1: prevState))}
                onSet = {setValue}
                />
            </div>
            <hr/>
            <div className={'row'}>
                <div className={'col-6'}>
                    {value} x RRNFT
                </div>
                <div className={'col-6'}>
                    {0.03 * value} <img alt={''} className={'img img-fluid'} width={10} src={ethImg}/>
                </div>
            </div>
            <button onClick={localMint} className="btn btn-grad btn-round">Mint</button>

            {mintStatus && <><p>{mintStatus}</p></>}
        </>
    }



    return (

        <div id="mint-box" className="cpn-btns">
            <div className="token-status token-status-s5 bg-theme-alt round no-bd">
                <div className={'row'}>
                    <div className={'col-6'}>
                        <h1>Mint</h1>
                    </div>
                    <div className={'col-6'}>
                        <ConnectWalletButton/>
                    </div>
                </div>
                <hr/>
                <h5>{mintAmount}/10.000 Minted</h5>
                <hr/>
                <h5>Rogue Reindeers cost 0.03 <img alt={''} className={'img img-fluid'} width={10} src={ethImg}/> each</h5>
                <p>Exluding gas fees</p>
                <hr/>
                {render}
            </div>
        </div>
    )
}

export default MintBox