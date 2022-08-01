import NavLink from "./NavLink";
import SignOut from "./SignOut";
import "./NavBar.css";

let NavBar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Cribby</a>
                <ul id="nav-mobile" className="right hide-on-small-and-down">
                    <SignOut signOut={props.signOut}/>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;