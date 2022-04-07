import {Icon} from '@iconify/react';
import Logo from '../aset/pasFoto.jpeg';
import './navbar.css';

function Search() {
    return (
        <input id="search" placeholder="Search Hotels" type="search"></input>
    )
}

function NavbarUser() {
    return (
        <div id="member">
            <div id="iconNav">
                <Icon icon="bxs:car" height="24" />
                <Icon icon="fa6-brands:instagram" height="24" />
            </div>
            <div id="user">
                <img src={Logo} id="user-icon" ></img>
                <p id="user-name">Wahyu</p>
            </div>
        </div>
    )
}

function Navbar() {
    return (
        <nav id="navbar">
            <img src={Logo} ></img>
            <Search />
            <NavbarUser />
        </nav>
    )    
}

export default Navbar;
