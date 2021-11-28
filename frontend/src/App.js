import './assets/css/snowflakes.css';


// Reindeers
import blitzen from './assets/images/Blitzen.jpg'
import dasher from './assets/images/Dasher.jpg'
import dancer from './assets/images/Dancer.jpg'
import prancer from './assets/images/Prancer.jpg'
import comet from './assets/images/Comet.jpg'
import donner from './assets/images/Donner.jpg'


import Navbar from "./Navbar";

import ImageCard from "./ImageCard";
import HeaderBlock from "./HeaderBlock";
import SectionBlock from "./SectionBlock";

function App() {
    const snowflakes = Array(50).fill(<div className={"snowflake"}/>)
    const images = [
        {
            title: 'Donner',
            secondary: 'Artist',
            src: donner,
            instagram: 'https://www.instagram.com/piocomic/',
            facebook: 'https://www.facebook.com/Piocracia',
            piocomic: 'https://www.piocomic.com/#!/-piomundo/'
        },

        {
            title: 'Blitzen',
            secondary: 'All-round manager',
            src: blitzen
        },

        {
            title: 'Dasher',
            secondary: 'Community',
            src: dasher
        },

        {
            title: 'Dancer',
            secondary: 'Community',
            src: dancer
        },

        {
            title: 'Comet',
            secondary: 'Copywriter',
            src: comet
        },

        {
            title: 'Prancer',
            secondary: 'Tech dev',
            src: prancer
        },

    ]
    return (
        <div className="App">
            <div id={'snowflakes'}>
                {snowflakes}
            </div>
            <Navbar/>
            <div className={'container-fluid'}>
                <HeaderBlock/>
                <SectionBlock id={'story'} title={'The Story'}>
                    Everybody knows that Christmas presents from Santa are a huge hustle, paid for by the
                    parents themselves.<br/><br/>
                    The rich parents pay Santa a ton of money to deliver a buck load of presents under the
                    Christmas tree on the joyful morning.
                    All while the less fortunate parents can't pay the huge fees that Santa asks for his service
                    even though their kids deserve it just as much.<br/><br/>

                    Santa's Reindeer have been doing the brunt work for years now, flying him around in his huge
                    golden sled, seeing all this injustice happen.
                    They've had enough.
                    10,000 Rogue Reindeer have escaped Santa's headquarters, soaring the Ethereum blockchain and
                    have made
                    it their life mission to support the people who need it.
                </SectionBlock>
                <SectionBlock id={'vision'} title={'Our Vision'}>
                    The Christmas period is widely associated with festivities, being together with beloved
                    family members and friends, enjoying good food, opening presents, sharing a laugh and
                    telling
                    incredible stories.
                    Sadly, not everyone is as fortunate as many of us to share the same experiences.
                    The Rogue Reindeer team is dedicated to spreading those experiences and giving everything
                    that they dream of as possible.
                    We will do everything to bring this to you as a community and we hope that you join us in
                    this MISSION OF JOY for the less fortunate kids.<br/><br/>
                </SectionBlock>
                <SectionBlock title={"It's a crazy world"}>

                    Some days we end up paying gas fees that are people’s monthly wage.
                    Families that are struggling could do loads of things with just a single transaction fee.
                    With coordinated effort and teamwork, we can make a huge difference. No, we won’t be able to
                    help everyone, but every life changed is for the better. Together, we can be a part of
                    change.
                </SectionBlock>
                <SectionBlock title={'Free stuff!'}>
                    <ul>
                        <li>We will be holding community giveaways, contests and activities.</li>
                        <li>RR holders will also have exclusive access to future airdrops, NFT mints and more.
                        </li>
                        <li>Build learning channels and tools for RR holders.</li>
                        <li>Donations to charity institutions that personally support people in need.</li>
                        <li>Rogue Reindeer Make A Wish</li>
                        <li>Personal donations: funding, clothing, tuition fees and more to community voted
                            cases
                        </li>
                    </ul>
                    <br/>
                </SectionBlock>
                <SectionBlock id={'goals'} title={'Goals'}>

                    We want to bring value to the people by growing the Rogue Reindeer brand and to the
                    community as holders.
                    To the people around us as support. To the people who need it the most.
                    This can be in all kind of forms like with donations, information, support, ..
                    <br/>
                </SectionBlock>
                <SectionBlock id={'team'} title={'The Team'}>
                    <div className={'row'}>
                        {images.map(value => (
                            <div className={'col-lg-4 col-sm-6'}>
                                <ImageCard title={value.title}
                                           image={value.src}
                                           secondary={value.secondary}
                                           instagram={value.instagram}
                                           facebook={value.facebook}
                                           piocomic={value.piocomic}
                                />
                            </div>
                        ))}
                    </div>
                </SectionBlock>
                <button onClick={() => window.scrollTo(0, 0)} type="button" className="btn btn-dark btn-floating btn-lg" id="btn-back-to-top"
                        style={{display: 'block'}}><i className="bi bi-arrow-up-short"/></button>
            </div>
        </div>
    )
}


    {/*<div className={'row'} style={{paddingTop: '10vh'}}>*/
    }
    {/*    <SocialButton img={discord} title='Join Discord' link={'https://discord.gg/BGnzJ5Jq'}/>*/
    }
    {/*    <SocialButton img={twitter} title={'Join Twitter'}*/
    }
    {/*                  link={'https://twitter.com/Rogue_Reindeer'}/>*/
    }
    {/*</div>*/
    }
    {/*</div>*/
    }
    {/*</div>*/
    }


    export default App;
