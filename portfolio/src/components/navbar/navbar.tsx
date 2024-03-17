import './navbar.css';
import { motion } from "framer-motion";
const navigationItems = [
    'Home', 'About', 'Skills', 'Projects', 'Contact'
];
function Navbar() {
    return <>
        <div className="container-fluid nav-bar p-3 sticky-top">
            <ul className="nav justify-content-center">
                {navigationItems.map((item) => (<li className="nav-item" key={item}>
                    <a className="nav-link" key={item}>{item}</a>
                </li>))}
            </ul>
        </div>
    </>
}
export default Navbar;