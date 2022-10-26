import {Link} from "react-router-dom";

const NavBar= () =>{
// use link instead of a
    return(
        <nav className='navbar navbar-light bg-light'>
            <a className="navbar-brand" href="http://localhost:3000/chat">
                Chat
            </a>
            <a className="navbar-brand" href="http://localhost:3000/search">
                Search
            </a>
            <a className="navbar-brand h4 " href="http://localhost:3000/">
                HawkShop
            </a>
            <a className="navbar-brand" href="http://localhost:3000/settings">
                Settings
            </a>
            <a className="navbar-brand" href="http://localhost:3000/account">
                Account
            </a>
        </nav>
    )
}


export default NavBar;