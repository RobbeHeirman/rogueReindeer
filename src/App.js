import './assets/css/snowflakes.css';
import discord from './assets/images/Discord-Logo-Color.png'
import twitter from './assets/images/2021 Twitter logo - blue.png'
import SocialButton from "./SocialButton";

function App() {
    const snowflakes = Array(50).fill(<div className={"snowflake"}/>)
    return (
        <div className="App">
            <div id={'snowflakes'}>
                {snowflakes}
            </div>

            <div className={'container-fluid'} style={{paddingTop: '25vh'}}>
                <div className={'row'}>
                    <div className={'col-4'}/>
                    <div className={'col-4 text-center'}>
                        <div className={'row'}>
                            <h1>Rogue Reindeer</h1>
                        </div>
                        <div className={'row'}>
                            <p style={{color: '#F1F1E6'}}>Comming Soon</p>
                        </div>
                        <div className={'row'} style={{paddingTop: '10vh'}}>
                            <SocialButton img = {discord} title= 'Join Discord'/>
                            <SocialButton img= {twitter} title={'Join Twitter'}/>
                        </div>

                    </div>
                    <div className={'col-4'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
