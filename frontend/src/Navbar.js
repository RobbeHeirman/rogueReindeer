import logo from './assets/images/Logo.png'
import SocialButton from "./SocialButton";
import discord from "./assets/images/Discord-Logo-Color.png";
import twitter from "./assets/images/2021 Twitter logo - blue.png";

const Navbar = () => {
    return (

        <nav className={"navbar navbar-light navbar-expand-lg   custom_nav"}>
            <div className={'container-fluid'}>
                <a className={'navbar-brand pl-5'} href={''} style={{marginLeft: '5vw'}}>
                    <img src={logo} width='45' height='45' alt=''/>RR
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/*<li className={'nav-item p-2'}><a className={'nav-link'}><img src={discord} width={'60'}*/}
                        {/*                                                          height={'60'}/></a></li>*/}

                        {/*<li className={'nav-item p-2 '}><a className={'nav-link'}><img src={twitter} width={'55'}*/}
                        {/*                                                          height={'55'}/></a></li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar