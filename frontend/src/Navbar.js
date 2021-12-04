import logo from './assets/images/Logo.png'


const Navbar = () => {
    return (

        <nav className={"navbar navbar-light navbar-expand-lg   custom_nav d-sm-none d-none d-md-block"}>
            <div className={'container-fluid'}>
                <a className={'navbar-brand pl-5'} href={''} style={{marginLeft: '1vw', fontSize: '33px'}}>
                    <img src={logo} width='60' height='60' alt=''/>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className={'nav-item'}><a className={'nav-link'} href={'#story'}>Story</a></li>
                        <li className={'nav-item'}><a className={'nav-link'} href={'#vision'}>Vision</a></li>
                        <li className={'nav-item'}><a className={'nav-link'} href={'#gifts'}>Gifts</a></li>
                        <li className={'nav-item'}><a className={'nav-link'} href={'#goals'}>Goals</a></li>
                        <li className={'nav-item'}><a className={'nav-link'} href={'#team'}>Team</a></li>
                        
                        <ul className="navbar-nav ms-auto">
                        <li className={'nav-item p-2'}><button type={'button'} className={'btn btn-lg btn-dark'}>Connect</button></li>


                    </ul>
                    
                    </ul>
                    
                  
                </div>
            </div>
        </nav>
    )
}

export default Navbar