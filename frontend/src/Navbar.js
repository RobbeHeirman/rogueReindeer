// import './assets/css/NavBar.css'
import logo from './assets/images/Logo.png'


const Navbar = () => {
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
                            href="#"
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
                                    <a className="menu-link nav-link" href="">Home</a>
                                </li>

                                <li className="menu-item">
                                    <a className="menu-link nav-link" href="#about"
                                    >About</a
                                    >
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link nav-link" href="#whyMint"
                                    >Why mint?</a
                                    >
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link nav-link" href="#roadmap"
                                    >Roadmap</a
                                    >
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link nav-link" href="#faq"
                                    >FAQ</a
                                    >
                                </li>
                                <li className="menu-item">
                                    <a target="_blank" href="https://discord.gg/QrFNGhKVDV"
                                    ><em className="fab fa-discord"></em
                                    ></a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        target="_blank"
                                        href="https://twitter.com/Rogue_Reindeer/"
                                    ><em className="fab fa-twitter"></em
                                    ></a>
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