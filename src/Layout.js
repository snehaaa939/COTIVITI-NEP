import { Outlet, NavLink } from "react-router-dom";
import Footer from "./footer";
const Layout = () => {
    return (
        <>
            <header className="mainpage">
                <div class="container">
                    <a href="#">
                        <img src="cotiviti_light.png" alt="cotiviti logo" id="logo" />
                    </a>
                    <nav>
                        <ul id="menu">
                            <li>
                                <NavLink to="/" id="home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
            <Footer/>
        </>
    )
}
export default Layout;