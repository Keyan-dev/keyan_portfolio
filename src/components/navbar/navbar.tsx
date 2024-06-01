import './navbar.css';
const navigationItems = [
    'Home', 'About', 'Skills', 'Experience'
];
function Navbar() {
    return <>
        <div className="container-fluid nav-bar p-3 sticky-top">
            <ul className="nav justify-content-center">
                {navigationItems.map((item) => (<li className="nav-item" key={item}>
                    <a className="nav-link" href={'#' + item} key={item}>{item}</a>
                </li>))}
            </ul>
        </div>
    </>
}
export default Navbar;