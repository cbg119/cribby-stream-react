import NavLink from "./NavLink";
import "./NavBar.css";

let NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Cribby</a>
                <ul id="nav-mobile" className="right hide-on-small-and-down">
                    <NavLink href="#" name="Test Link 1" />
                    <NavLink href="#" name="Test Link 2" />
                    <NavLink href="#" name="Test Link 1" />
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;