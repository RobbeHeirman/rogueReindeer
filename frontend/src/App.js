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
                            <p style={{color: '#F1F1E6'}}><h2>The story</h2></p>
                           

                        </div>
                        <div className={'row'}>
                        <p style={{color: '#F1F1E6'}}>Everybody knows that Christmas presents from Santa are a huge ponzi, paid for by the parents themselves. The rich parents pay Santa loads of money to deliver a buckload of presents under the Christmas tree on the joyful morning. All while the less fortunate parents can't pay the huge fees that Santa asks for his service even though their kids deserve it just as much. Santa's Reindeer have seen all this injustice happen while doing the brunt work for years now, flying Scammy Santa around in his huge sled. But they have had enough. The Rogue Reindeer have escaped Santa's HQ to live a life of well deserved freedom while still bringing joy and excitement to all the people that deserve it.Their adventures will lead to amazing encounters and experiences, something to cherish and remember for a lifetime.</p>
                        </div>
                        <div className={'row'}>
                            <p style={{color: '#F1F1E6'}}><h2>Our vision</h2></p>
                           

                        </div>
                        <div className={'row'}>
                        <p style={{color: '#F1F1E6'}}>The Christmas periods are widely associated with festivities, being together with beloved family members and friends, enjoying good food, opening presents, ..  Sadly not everyone is as fortunate as many of us to share the same experiences. The Rogue Reindeer team is dedicated to getting as many people the experiences/needs/life/knowledge/.. that they dream of as possible in our capacity. We will do everything to bring this to you as a community and we hope that you join us in this 'mission for life' for other people in return.</p>
                        </div>

                        <div className={'row'}>
                            <p style={{color: '#F1F1E6'}}><h2>Roadmap</h2></p>
                           

                        </div>
                        <div className={'row'}>
                            <p style={{color: '#F1F1E6'}}><h2>The team</h2></p>
                           

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
