import CountDown from "./CountDown";
import reindeer1 from "./assets/images/gif.gif";
import SocialButton from "./SocialButton";
import discord from "./assets/images/Discord-Logo-Color.png";
import twitter from "./assets/images/2021 Twitter logo - blue.png";

const HeaderBlock = () => (
  <div id={"main-block"} className={"row h-100"}>
    <div className={"col-4"} />
    <div className={"col-lg-4 col-sm-12 text-center"}>
      <div className={"row"}>
        <h1 className={"snow-font"}>Rogue Reindeer</h1>
      </div>
      <div className={"col-4"}></div>
      <div className={"row"}>
        <div className={"col-lg-7 col-sm-12"}>
          <div className={"row h-100 justify-content-md-center"}>
            <div className={"col-12 align-self-center"}>
              <h3 id={"mint-countdown"} className={"align-middle"}>
                Mint countdown
              </h3>
              <CountDown />
            </div>
          </div>
        </div>
        <div className={"col-lg-5 col-sm-12 "}>
          <img alt={""} className={"img"} height="300px" src={reindeer1} />
        </div>
      </div>
      <div className={"row"} style={{ paddingTop: "10vh" }}>
        <SocialButton
          img={discord}
          title="Join Discord"
          link={"https://discord.gg/fDr769uxnM"}
        />
        <SocialButton
          img={twitter}
          title={"Join Twitter"}
          link={"https://twitter.com/Rogue_Reindeer"}          
        />
       
      </div>
    </div>
    <div className={"col-4"} />
  </div>
);

export default HeaderBlock;
