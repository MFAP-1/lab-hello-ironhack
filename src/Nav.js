import ironLogo from './assets/images/ironhack-logo.svg';
import menuTop from './assets/images/menu-top.svg';

function Nav() {
    return (
        <nav className='d-flex justify-content-between'>
            <img src ={ironLogo} alt='ironhack logo'/>
            <img src ={menuTop} alt='menu dropdown'/>
        </nav>
    );
}

export default Nav;