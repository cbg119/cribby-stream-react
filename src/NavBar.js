import NavLink from "./NavLink";
import "./NavBar.css"

let NavBar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Cribby</a>
                <ul id="nav-mobile" class="right hide-on-small-and-down">
                    <NavLink href="#" name="Test Link 1" />
                    <NavLink href="#" name="Test Link 2" />
                    <NavLink href="#" name="Test Link 1" />
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;