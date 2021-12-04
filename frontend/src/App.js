import "./assets/css/snowflakes.css";

// Reindeers
import blitzen from "./assets/images/Blitzen.png";
import dasher from "./assets/images/Dasher.png";
import dancer from "./assets/images/Dancer.png";
import prancer from "./assets/images/Prancer.png";
import comet from "./assets/images/Comet.png";
import donner from "./assets/images/Donner.png";

import Navbar from "./Navbar";

import ImageCard from "./ImageCard";
import HeaderBlock from "./HeaderBlock";
import SectionBlock from "./SectionBlock";
//comment

function App() {
  const snowflakes = Array(50).fill(<div className={"snowflake"} />);
  const images = [
    {
      title: "Donner",
      secondary: "Artist",
      src: donner,
      instagram: "https://www.instagram.com/piocomic/",
      facebook: "https://www.facebook.com/Piocracia",
      piocomic: "https://www.piocomic.com/#!/-piomundo/",
    },

    {
      title: "Blitzen",
      secondary: "Allround manager",
      src: blitzen,
    },

    {
      title: "Dasher",
      secondary: "Community",
      src: dasher,
    },

    {
      title: "Dancer",
      secondary: "Community",
      src: dancer,
    },

    {
      title: "Comet",
      secondary: "Copywriter",
      src: comet,
    },

    {
      title: "Prancer",
      secondary: "Tech Dev",
      src: prancer,
    },
  ];
  return (
    <div className="App">
      <div id={"snowflakes"}>{snowflakes}</div>
      <Navbar />
      <div className={"container-fluid"}>
        <HeaderBlock />
        <SectionBlock id={"story"} title={"The Story of RR"}>
          Everybody knows that Christmas presents from Santa are a huge hustle,
          paid for by the parents themselves.
          <br />
          The rich parents pay Santa a lot of money to leave a buck load of
          presents under the Christmas tree, that joyful morning. Meanwhile,
          less fortunate parents can't pay the huge fees that Santa asks for his
          service, even though their kids deserve it just as much. <br />
          <br />
          Santa's Reindeer have been doing the brunt work for years now, flying
          him around in his huge golden sled, witnessing this injustice. They've
          had enough. <br />
          10,000 Rogue Reindeer have escaped Santa's headquarters, soaring the
          Ethereum blockchain with a new purpose: to support the children who
          need it.
        </SectionBlock>
        <SectionBlock id={"vision"} title={"Our Vision"}>
          The Christmas period is a time for festivities with family and
          friends. Time spent enjoying good food, opening presents, and sharing
          smiles around the fireplace. <br />
          Sadly, not everyone is fortunate enough to share these experiences.
          That is why we, the Rogue Reindeer team, are dedicated to spreading
          those jolly moments and hope that you join us in our MISSION OF JOY
          for those less fortunate. <br />
        </SectionBlock>
        <SectionBlock title={"It's a crazy world"}>
          Some days we end up paying entire paychecks in gas fees. A single
          transaction fee could benefit a struggling family so much. With
          coordinated effort and teamwork, we can make a huge difference. No, we
          won’t be able to help everyone, but every life changed is for the
          better. Together, we can be a part of change!
        </SectionBlock>
        <SectionBlock id={"gifts"} title={"Gifts and utility for everyone!"}>
          <ul>
            <li>
              Rogue Reindeer are guaranteed access to future mints, airdrops and
              more goodies
            </li>
            <li>
              RR holders will also have exclusive access to future airdrops, NFT
              mints and more
            </li>
            <li>We will build learning channels and tools for RR holders</li>
            <li>
              Donations to charity institutions, like{" "}
              <a href="https://www.pelicano.be">Pelicano</a> and Rogue Reindeer
              Make A Wish, that personally support children in need
            </li>
            <li>
              NFT staking will be introduced, powering our own ecosystem with
              $ROGUE token
            </li>
            <li>
              We’ll be looking to buy digital land in different Metaverses,
              the location and what kind of activities will be decided together with
              the community{" "}
            </li>
          </ul>
          <br />
        </SectionBlock>
        <SectionBlock id={"goals"} title={"Goals"}>
          By growing the Rogue Reindeer brand, we want to bring value. Value to
          the community as holders. Value to the people that support us, but
          most importantly: to the people who need it most.
          <br />
        </SectionBlock>
        <SectionBlock id={"goals"} title={"Supported charities"}>
          We currently have a partnership with the following charity:
          <ul>
            <li>
              <a href="https://www.pelicano.be">Pelicano</a>
            </li>
            <li>More charities will be handpicked by the community! </li>
          </ul>
          Join the <a href="https://discord.gg/nd7mRsXryC">Discord server</a> to
          learn more about why we chose to support these wonderful charities and
          the crucial work they're doing.
          <br />
        </SectionBlock>

        <SectionBlock id={"team"} title={"The Team"}>
          <div className={"row"}>
            {images.map((value) => (
              <div className={"col-lg-4 col-sm-6"}>
                <ImageCard
                  title={value.title}
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
        <button
          onClick={() => window.scrollTo(0, 0)}
          type="button"
          className="btn btn-dark btn-floating btn-lg"
          id="btn-back-to-top"
          style={{ display: "block" }}
        >
          <i className="bi bi-arrow-up-short" />
        </button>
      </div>
    </div>
  );
}

{
  /*<div className={'row'} style={{paddingTop: '10vh'}}>*/
}
{
  /*    <SocialButton img={discord} title='Join Discord' link={'https://discord.gg/BGnzJ5Jq'}/>*/
}
{
  /*    <SocialButton img={twitter} title={'Join Twitter'}*/
}
{
  /*                  link={'https://twitter.com/Rogue_Reindeer'}/>*/
}
{
  /*</div>*/
}
{
  /*</div>*/
}
{
  /*</div>*/
}

export default App;
