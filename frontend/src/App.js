import './assets/css/snowflakes.css';
import discord from './assets/images/Discord-Logo-Color.png'
import twitter from './assets/images/2021 Twitter logo - blue.png'

import reindeer1 from './assets/images/reindeer1.png'
import SocialButton from "./SocialButton";
import Navbar from "./Navbar";
import CountDown from "./CountDown";

function App() {
    const snowflakes = Array(50).fill(<div className={"snowflake"}/>)
    return (
        <div className="App">
            <div id={'snowflakes'}>
                {snowflakes}
            </div>

            <Navbar/>
            <div className={'container-fluid'}>
                <div id={'main-block'} className={'row h-100'}>
                    <div className={'col-4'}/>
                    <div className={'col-lg-4 col-sm-12 text-center'}>
                        <div className={'row'}>
                            <h1 className={'snow-font'}>Rogue Reindeer</h1>
                        </div>
                        <div className={'col-4'}>
                        </div>
                        <div className={'row'}>
                            <div className={'col-lg-7 col-sm-12'}>
                                <div className={'row h-100'}>
                                    <div className={'col-12 align-self-center'}>
                                        <h3 id={'mint-countdown'} className={'align-middle'}>Mint countdown</h3>
                                        <CountDown/>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-lg-5 col-sm-12'}>
                                <img alt={''} className={'img'} height='300px' src={reindeer1}/>
                            </div>
                        </div>
                        <div className={'row'} style={{paddingTop: '10vh'}}>
                            <SocialButton img={discord} title='Join Discord' link={'https://discord.gg/fDr769uxnM'}/>
                            <SocialButton img={twitter} title={'Join Twitter'} link ={'https://twitter.com/Rogue_Reindeer'}/>
                        </div>
                    </div>
                    <div className={'col-4'}/>
                </div>
                <div id={'story'} className={'row'} style={{marginTop: '15vh'}}>
                    <div className={'col-3'}/>
                    <div className={'col-6'}>
                        <h1 className={'snow-font'} style={{color: 'black'}}>The story </h1>
                        <h3>

                            Everybody knows that Christmas presents from Santa are a huge hustle, paid for by the
                            parents themselves.<br/><br/>
                            The rich parents pay Santa a ton of money to deliver a buck load of presents under the
                            Christmas tree on the joyful morning.
                            All while the less fortunate parents can't pay the huge fees that Santa asks for his service
                            even though their kids deserve it just as much.<br/><br/>

                            Santa's Reindeer have been doing the brunt work for years now, flying him around in his huge
                            golden sled, seeing all this injustice happen.
                            They have had enough.
                            10,000 Rogue Reindeer have escaped Santa's HQ, soaring the Ethereum blockchain and have made
                            it their life mission to support the people who need it.
                        </h3>
                    </div>

                </div>


                <div id={'vision'} className={'row'} style={{marginTop: '15vh'}}>
                    <div className={'col-3'}/>
                    <div className={'col-6'}>
                        <h1 className={'snow-font'} style={{color: 'black'}}>Our Vision</h1>
                        <h3>
                            The Christmas period is widely associated with festivities, being together with beloved
                            family members and friends, enjoying good food, opening presents, sharing a laugh and tell
                            incredible stories.
                            Sadly, not everyone is as fortunate as many of us to share the same experiences.
                            The Rogue Reindeer team is dedicated to getting as many people the
                            experiences/needs/joy/knowledge/.. that they dream of as possible in our capacity.
                            We will do everything to bring this to you as a community and we hope that you join us in
                            this 'mission for joy’ for the less fortunate kids.<br/><br/>

                            <h1>It’s a crazy world</h1>
                            Some days we end up paying gas fees that are people’s monthly wage.
                            Families that are struggling could do loads of things with just a single transaction fee.
                            With coördinated effort and teamwork, we can make a huge difference. No, we won’t be able to
                            help everyone, but every live changed is for the better. Together, we can be a part of
                            change.<br/><br/>

                            <h1>Free stuff!</h1>
                            We will be holding community giveaways, contests and activities. RR holders have exclusive
                            access to future airdrops, NFT mints and more. Learning channels/tools for RR holders.
                            Donations to charity institutions that personally support people in need. Personal donations
                            (funding, clothing, tuition fees, ..) to community voted cases. Rogue Reindeer Make A Wish
                            (still thinking about a fitting title!)<br/><br/>

                            <h1>GOALS</h1>
                            We want to bring value to the people. To the community as holders. To the people around us as support. To the people who need it the most. This can be in all kind of forms; money, information, support, ..

                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
