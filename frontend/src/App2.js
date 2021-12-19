import './assets/css/style-zinnia1bce.css'
import './assets/css/vendor.bundle1bce.css'
import './assets/css/index.css'

import gif from './assets/images/gif.gif'
import img1 from "./assets/images/1.gif"
import Navbar from "./Navbar";
import {useEffect, useState} from "react";


const App = () => {
    const [isDark, setIsDark] = useState(window.pageYOffset !== 0);
    useEffect(() => {
            window.addEventListener('scroll', () => setIsDark(window.pageYOffset !== 0))
        }, []
    )
    const headerName = "nk-header page-header is-transparent is-sticky is-shrink is-dark " + (isDark ? "has-fixed" : "")
    return (
        <body className="nk-body body-wider theme-dark mode-onepage">
        <div className="nk-wrap">
            <header className={headerName} id="header">
                <Navbar/>
                <div className="header-banner bg-theme-dark" id="home">
                    <div className="nk-banner">
                        <div className="banner banner-mask-fix banner-fs banner-single tc-light">
                            <div className="banner-wrap ov-v">
                                <div className="container">
                                    <div className="row align-items-center
                                    justify-content-center justify-content-lg-between gutter-vr-30px">
                                        <div className="col-lg-6">
                                            <div className="banner-caption wide-auto text-center text-lg-left">
                                                <div className="cpn-head mt-0">
                                                    <h1 className="title title-xl-2">
                                                        Welcome to Rogue Reindeer
                                                    </h1>
                                                </div>
                                                <div className="cpn-text cpn-text-s1">
                                                    <p className="lead">
                                                        10.000 Rogue Reindeer on the
                                                        Ethereum Blockchain
                                                    </p>
                                                </div>
                                                <div id="mint-box" className="cpn-btns">
                                                    <div
                                                        className="
                              token-status token-status-s5
                              bg-theme-alt
                              round
                              no-bd
                            "
                                                    >
                                                        <p>Mint date: 23 december</p>
                                                        <a
                                                            href=""
                                                            className="btn btn-grad btn-round"
                                                        >23 december 2021 07:00 PM UTC +1</a
                                                        >
                                                    </div>
                                                </div>
                                                <div className="cpn-social">
                                                    <ul className="social">
                                                        <li>
                                                            <a target="_blank" href="https://discord.gg/QrFNGhKVDV">
                                                                <em className="social-icon fab fa-discord"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a target="_blank"
                                                               href="https://twitter.com/Rogue_Reindeer/">
                                                                <em className="social-icon fab fa-twitter"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-sm-9">
                                            <div
                                                className="
                          token-status token-status-s5
                          bg-transparent
                          no-bd
                        "
                                            >
                                                <img
                                                    src={gif}
                                                    alt=""
                                                    style={{
                                                        maxWidth: '100%',
                                                        borderRadius: '5px'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-ovm mask-c-dark shape-v mask-contain-bottom"/>
                </div>
            </header>
            <main className="nk-pages">
                <section id="about" className="section bg-white ov-h">
                    <div className="container">
                        <div className="nk-block nk-block-features-2">
                            <div
                                className="
                  row
                  align-items-center
                  gutter-vr-30px
                  justify-content-center justify-content-md-between
                "
                            >
                                <div className="col-mb-9 col-sm-7 col-md-6 col-lg-5">
                                    <div className="gfx py-4">
                                        <img src={img1} alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-10 col-md-6 text-center text-md-left">
                                    <div className="nk-block-text">
                                        <h4 className="title title-lg">What is Rogue Reindeer?</h4>
                                        <p className="lead">

                                            Everybody knows that Christmas presents from Santa are a huge hustle, paid
                                            for
                                            by the parents themselves.
                                            The rich parents pay Santa a lot of money to leave a buck load of presents
                                            under
                                            the Christmas tree, that joyful morning. <br/><br/>
                                            Meanwhile, less fortunate parents can't pay the huge fees that Santa asks
                                            for
                                            his service, even though their kids deserve it just as much.

                                            Santa's Reindeer have been doing the brunt work for years now, flying him
                                            around
                                            in his huge golden sled, witnessing this injustice.
                                            <br/><br/>
                                            They've had enough.
                                            10.000 Rogue Reindeer have escaped Santa's headquarters, soaring the
                                            Ethereum
                                            blockchain with a new purpose: to support the children who need it.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="section section-tokensale tc-light bg-theme"
                    id="whyMint"
                >
                    <div className="container">
                        <div className="section-head text-center wide-auto-sm">
                            <h2 className="title title-s4" title="Why Rogue Reindeer?">
                                Why Rogue Reindeer?
                            </h2>
                            <ol>
                                <li>
                                    The Christmas period is a time for festivities with family and friends.
                                    Time spent enjoying good food, opening presents, and sharing smiles around the
                                    fireplace.
                                    Sadly, not everyone is fortunate enough to share these experiences.
                                    That is why we, the Rogue Reindeer team, are dedicated to spreading those jolly
                                    moments
                                    and hope that you join us in our <b>MISSION OF JOY</b> for those less fortunate.
                                    We
                                    hope to deliver high quality artwork to be used as a PFP or
                                    however you like. <br/> <b>But why should you mint?</b><br/><br/><b
                                >1. Aesthetics </b
                                >
                                    - every attribute has been hand-drawn in house by <u><b><a
                                    href="https://www.instagram.com/piocomic/">Pío</a></b></u>. This is a
                                    completely original ground-up project. It was designed with
                                    profile pictures in mind so every piece will look great on
                                    your account.<br/><b>2. Guaranteed access</b> - Rogue Reindeer holders are
                                    guaranteed
                                    access to future mints, airdrops and more goodies.
                                    <br/><b>3. Low mint price </b>- We have kept
                                    the mint price low at <b>0.03 ETH</b> for accessibility.<br/><b
                                >4. Charitable donation </b
                                >- 10% of the proceeds from mint will go straight to charity.
                                    We have a partnership with <u><b><a
                                    href="https://www.pelicano.be">STICHTING PELICANO</a></b></u>, an organization that supports
                                    children
                                    in need.
                                    More charities will be chosen by community vote.<br/>
                                    <b>5. NFT staking </b>
                                    - NFT staking will be introduced, powering our <b>own ecosystem with $PINE
                                    token.</b><br/>
                                    <b> 6. Metaverse</b> - We’ll be looking to buy digital land in different Metaverses,
                                    the location and what kind of activities will be decided together with the
                                    community. <br/><br/>
                                     <b> 7. P2E Game</b> - We’ll develop a P2E (play to earn)
                                    game where you can <b>collect $PINE tokens, just by playing!</b>{" "}
                                    <br />
                                    <br />
                                </li>
                            </ol>
                        </div>
                        <div className="nk-block nk-block-token mgb-m30">
                            <div
                                className="
                  row
                  align-items-center
                  justify-content-between
                  gutter-vr-50px
                "
                            >
                                <div className="col-lg-8">
                                    <div className="row gutter-vr-30px">
                                        <div className="col-sm-4">
                                            <div className="stage-info">
                                                <h6 className="title title-s6 title-xs-s2">
                                                    Minting Begins
                                                </h6>
                                                <p>Dec 23 2021 07:00:00 UTC + 1<br/></p>
                                                <a
                                                    rel="nofollow"
                                                    className="btn btn-sm btn-grad btn-round"
                                                    href="https://savvytime.com/converter/cet/dec-23-2021/7pm"
                                                >Convert to your time</a
                                                >
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="stage-info">
                                                <h6 className="title title-s6 title-xs-s2">Total Mints</h6>
                                                <h2>10.000</h2>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="stage-info">
                                                <h6 className="title title-s6 title-xs-s2">
                                                    Price per Mint
                                                </h6>
                                                <h2>0.03 ETH</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div
                                        className="
                      token-status token-status-s5
                      bg-theme-alt
                      round
                      no-bd
                    "
                                    >
                                        <h6>Keep up with our launch updates</h6>
                                        <br/>
                                        <ul className="social pdb-m justify-content-center">
                                            <li>
                                                <a target="_blank" href="https://discord.gg/QrFNGhKVDV"
                                                ><em className="social-icon fab fa-discord"/></a>
                                            </li>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="https://twitter.com/Rogue_Reindeer/"
                                                ><em className="social-icon fab fa-twitter"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-roadmap bg-theme tc-light" id="roadmap">
                    <div className="container">
                        <div className="section-head text-center wide-auto">
                            <h2 className="title title-lg title-dark">Roadmap</h2>
                            <p className="lead">
                                The primary value of Rogue Reindeer is the high quality
                                art. We wanted to develop an original and iconic project
                                exclusive for the Ethereum blockchain that holders can be proud of. However, we
                                are much more than just a pretty face.<br/>
                            </p>
                        </div>
                        <div className="nk-block nk-block-roadmap">
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    <div className="roadmap-wrap">
                                        <div className="roadmap-line"/>
                                        <div className="roadmap roadmap-right">
                                            <div className="roadmap-step">
                                                <div className="roadmap-head">
                          <span className="roadmap-time"
                          >Wednesday 22th December 2021</span
                          >
                                                    <span className="roadmap-title">PRESALE</span>
                                                </div>
                                                <p>
                                                    To reward our earliest supporters and active members -
                                                    those first 500 who join our Discord and those with the Rogue Deer
                                                    Role will be able to
                                                    receive whitelist access to the
                                                    full collection. They
                                                    get an amazing opportunity to mint earlier with less rush.
                                                    There will be no difference in mint price. <br/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="roadmap roadmap-left">
                                            <div className="roadmap-step">
                                                <div className="roadmap-head">
                          <span className="roadmap-time"
                          >Thursday 23 december 2021</span
                          >
                                                    <span className="roadmap-title">LAUNCH</span>
                                                </div>
                                                <p>
                                                    We launch the full collection to the public and get
                                                    listed on OpenSea.<br/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="roadmap roadmap-right">
                                            <div className="roadmap-step">
                                                <div className="roadmap-head">
                                                    <span className="roadmap-time"/>
                                                    <span className="roadmap-title">DONATION</span>
                                                </div>
                                                <p>
                                                    Upon selling out <b> we will distribute 10% of the proceeds</b> from our
                                                    mint to charitable organizations. The first one will be <u><b><a
                                                    href="https://www.pelicano.be">STICHTING PELICANO</a></b></u>. We want to
                                                    donate to organizations that are supporting children all over the
                                                    world.
                                                    More charities will be chosen by community vote.<br/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="roadmap roadmap-left">
                                            <div className="roadmap-step">
                                                <div className="roadmap-head">
                                                    <span className="roadmap-time"/>
                                                    <span className="roadmap-title">COMMUNITY</span>
                                                </div>
                                                <p>
                                                    We believe in value first, mint later. By growing the Rogue Reindeer
                                                    brand, we want to bring that value.
                                                    Value to the community as holders.
                                                    Value to the people that support us, but most importantly: to the
                                                    children who need it most.
                                                    <span/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="roadmap roadmap-right">
                                            <div className="roadmap-step">
                                                <div className="roadmap-head">
                                                    <span className="roadmap-time"/>
                                                    <span className="roadmap-title">ART</span>
                                                </div>
                                                <p>
                                                    As art is at the core of our project, you can expect
                                                    that there will be more art on the horizon. Holders
                                                    will be eligible for air drops, access to smaller,
                                                    much more exclusive collections and collaborations
                                                    with other projects in the space. Our <u><b><a
                                                    href="https://www.instagram.com/piocomic/">artist Pío</a></b></u> will 
                                                    create more content for future mints and introduce them in a
                                                    comicbook where all the future NFT characters will meet.
                                                    Other digital art like a <b>short movie</b> and a <b>P2E game</b> will follow later on.<br/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-white pb-0" id="faq">
                    <div className="container">
                        <div className="section-head text-center wide-auto-sm">
                            <h2 className="title title-s4" title="FAQS">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="nk-block">
                            <div
                                className="row justify-content-center"
                                style={{
                                    marginBottom: "100px"
                                }}
                            >
                                <div className="col-xl-8 col-lg-10">
                                    <ul className="nav tab-nav tab-nav-line mgb-r">
                                        <li>
                                            <a className="active" data-toggle="tab" href="#about-project"
                                            >About this Project</a
                                            >
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#about-nfts">About NFTs</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="about-project">
                                            <div className="accordion accordion-faq" id="faq-content">
                                                <div className="accordion-item accordion-item-s4 bg-light">
                                                    <h5
                                                        className="accordion-title"
                                                        data-toggle="collapse"
                                                        data-target="#faq-content-0"
                                                    >
                                                        Where can I get one?
                                                        <span
                                                            className="accordion-icon accordion-icon-s2"
                                                        />
                                                    </h5>
                                                    <div
                                                        id="faq-content-0"
                                                        className="collapse"
                                                        data-parent="#faq-content"
                                                    >
                                                        <div className="accordion-content">
                                                            <p>
                                                                Right here on the website. Make sure to follow
                                                                us on Twitter and Discord to stay up to date!
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <h5
                                                        className="accordion-title"
                                                        data-toggle="collapse"
                                                        data-target="#faq-content-1"
                                                    >
                                                        How many pieces are there in the collection?
                                                        <span
                                                            className="accordion-icon accordion-icon-s2"
                                                        />
                                                    </h5>
                                                    <div
                                                        id="faq-content-1"
                                                        className="collapse"
                                                        data-parent="#faq-content"
                                                    >
                                                        <div className="accordion-content">
                                                            There are 10.000 pieces in the original Rogue
                                                            Reindeer collection.
                                                            We aim to be an inclusive project that many people
                                                            can see themselves in and proudly use as their PFP
                                                            as they navigate in the space and in the upcoming chosen
                                                            Metaverse.<br/>
                                                        </div>
                                                    </div>
                                                    <h5
                                                        className="accordion-title"
                                                        data-toggle="collapse"
                                                        data-target="#faq-content-2"
                                                    >
                                                        How much will it cost to mint?
                                                        <span
                                                            className="accordion-icon accordion-icon-s2"
                                                        />
                                                    </h5>
                                                    <div
                                                        id="faq-content-2"
                                                        className="collapse"
                                                        data-parent="#faq-content"
                                                    >
                                                        <div className="accordion-content">
                                                            The mint price will be 0.03 ETH. If you do not
                                                            have any ETH or you do not know what this means
                                                            then please reach out to us in Discord or on
                                                            Twitter and we would be happy to help you out.<br/>
                                                        </div>
                                                    </div>
                                                    <h5
                                                        className="accordion-title"
                                                        data-toggle="collapse"
                                                        data-target="#faq-content-3"
                                                    >
                                                        Why did you start this project?
                                                        <span
                                                            className="accordion-icon accordion-icon-s2"
                                                        />
                                                    </h5>
                                                    <div
                                                        id="faq-content-3"
                                                        className="collapse"
                                                        data-parent="#faq-content"
                                                    >
                                                        <div className="accordion-content">
                                                            There are a lot of opportunities in the Crypto and
                                                            NFT space. Finding much success ourselves, the
                                                            first thing we could think about doing was
                                                            spreading this opportunity to as many people as
                                                            possible while also donating to children in need. We wanted
                                                            to
                                                            create a PFP project that
                                                            had unique, beautiful and distinct art that we
                                                            could build an inclusive and supportive community
                                                            around. We want to share knowledge and help all
                                                            our community members grow.<br/>
                                                        </div>
                                                    </div>
                                                    <h5
                                                        className="accordion-title"
                                                        data-toggle="collapse"
                                                        data-target="#faq-content-4"
                                                    >
                                                        What's the story behind the art?
                                                        <span
                                                            className="accordion-icon accordion-icon-s2"
                                                        />
                                                    </h5>
                                                    <div
                                                        id="faq-content-4"
                                                        className="collapse"
                                                        data-parent="#faq-content"
                                                    >
                                                        <div className="accordion-content">
                                                            All of our art was lovingly made by our own <u><b><a
                                                            href="https://www.instagram.com/piocomic/">artist
                                                            Pío</a></b></u> from scratch, by hand. The aesthetic was achieved
                                                            by designing unique themed traits, drawing
                                                            inspiration from popculture and memes.
                                                            <br/>
                                                        </div>
                                                    </div>
                                                    <h5
                                                        className="accordion-title"
                                                        data-toggle="collapse"
                                                        data-target="#faq-content-5"
                                                    >
                                                        More questions?
                                                        <span
                                                            className="accordion-icon accordion-icon-s2"
                                                        />
                                                    </h5>
                                                    <div
                                                        id="faq-content-5"
                                                        className="collapse"
                                                        data-parent="#faq-content"
                                                    >
                                                        <div className="accordion-content">
                                                            Feel free to join us on <u><b><a
                                                            href="https://discord.gg/QrFNGhKVDV">Discord</a></b></u> or follow us on <u><b><a
                                                            href=" https://twitter.com/Rogue_Reindeer/">Twitter</a></b></u>.
                                                            We are happy to help you answer any question you might
                                                            have!<br/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="about-nfts">
                                            <div className="accordion accordion-faq" id="faq-68">
                                                <div className="accordion-item accordion-item-s4 bg-light">
                                                    <h5
                                                        className="accordion-title"
                                                        data-toggle="collapse"
                                                        data-target="#faq-68-1"
                                                    >
                                                        What is an NFT?
                                                        <span
                                                            className="accordion-icon accordion-icon-s2"
                                                        />
                                                    </h5>
                                                    <div
                                                        id="faq-68-1"
                                                        className="collapse show"
                                                        data-parent="#faq-68"
                                                    >
                                                        <div className="accordion-content">
                                                            <p>
                                                                Non-Fungible Tokens are unique, easily
                                                                verifiable digital assets that can represent
                                                                items such as GIFs, images, videos, music
                                                                albums, tickets to the game and more. Anything that exists online
                                                                can be purchased as an NFT, theoretically.
                                                            </p>
                                                            <p>
                                                                NFTs are different from cryptocurrencies because
                                                                they’re not interchangeable. Think of Pokémon
                                                                cards: You can trade them, but a Magikarp is not
                                                                the same as a holographic Charizard. But a
                                                                Bitcoin is indistinguishable from another
                                                                Bitcoin.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="accordion-item accordion-item-s4 bg-light">
                                                    <h5
                                                        className="accordion-title collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#faq-68-4"
                                                    >
                                                        Which wallet will I be able to use to mint an Rogue Reindeer
                                                        NFT?
                                                        <span
                                                            className="accordion-icon accordion-icon-s2"
                                                        />
                                                    </h5>
                                                    <div
                                                        id="faq-68-4"
                                                        className="collapse"
                                                        data-parent="#faq-68"
                                                    >
                                                        <div className="accordion-content">
                                                            <p>
                                                                As MetaMask is the most popular wallet, we have chosen
                                                                MetaMask as our go-to wallet.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item accordion-item-s4 bg-light">
                                                    <h5
                                                        className="accordion-title collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#faq-68-5"
                                                    >
                                                        How can you ensure distribution of mints is random?
                                                        <span
                                                            className="accordion-icon accordion-icon-s2"
                                                        />
                                                    </h5>
                                                    <div
                                                        id="faq-68-5"
                                                        className="collapse"
                                                        data-parent="#faq-68"
                                                    >
                                                        <div className="accordion-content">
                                                            <p>
                                                                We will be using a smart contract deployed on
                                                                the Ethereum chain to distribute the Rogue
                                                                Reindeer. The tokens can be verified on the
                                                                blockchain and our smart contract code can be
                                                                audited by the Ethereum core devs.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="nk-footer bg-theme-alt section-connect">
                <div className="section section-m pb-0 tc-light ov-h">
                    <div className="container py-4">
                        <div className="nk-block pb-lg-5">
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-6 col-md-9">
                                    <div className="wide-auto-sm section-head section-head-sm pdb-r">
                                        <h4 className="title title-md">
                                            Stay up to date with our project
                                        </h4>
                                    </div>
                                    <p>Join us on our communities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-ovm shape-contain shape-center-top shape-p"/>
                </div>
                <div className="section section-footer section-s tc-light bg-transparent">
                    <div className="container">
                        <div className="nk-block block-footer">
                            <div className="row">
                                <div className="col">
                                    <div className="wgs wgs-text text-center mb-3">
                                        <ul className="social pdb-m justify-content-center">
                                            <li>
                                                <a target="_blank" href="https://discord.gg/QrFNGhKVDV"
                                                ><em className="social-icon fab fa-discord"/></a>
                                            </li>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="https://twitter.com/Rogue_Reindeer/"
                                                ><em className="social-icon fab fa-twitter"/></a>
                                            </li>
                                        </ul>
                                        <div className="copyright-text copyright-text-s3 pdt-m">
                                            <p>
                        <span className="d-sm-block"
                        />All trademarks and copyrights belong to their
                                                respective owners.
                                            </p>

                                            <p>
                                                <a href="https://ethereum.org/" target="_blank">
                                                    Built on the Ethereum blockchain.
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
        </body>
    )
}

export default App;
