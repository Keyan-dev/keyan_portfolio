const navigationItems = [
    'Home', 'About', 'Skills', 'Projects', 'Contact'
];
function Navbar() {
    return <>
        <ul className="nav justify-content-center">
            {navigationItems.map((item) => (<li className="nav-item" key={item}>
                <a className="nav-link" key={item}>{item}</a>
            </li>))}
        </ul>
    </>
}
export default Navbar;