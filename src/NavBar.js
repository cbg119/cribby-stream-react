import NavLink from "./NavLink";
import SignOut from "./SignOut";
import SignIn from "./SignIn"

import "./NavBar.css";

let NavBar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Cribby</a>
                <ul id="nav-mobile" className="right hide-on-small-and-down">
                    {props.loggedIn ? <SignOut key={props.loggedIn} signOut={props.signOut}/> : <SignIn key={props.loggedIn} signIn={props.signIn}/>}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;