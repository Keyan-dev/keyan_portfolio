import './navbar.css';
const navigationItems = [
    'Home', 'About', 'Skills', 'Experience', 'Projects'
];
const icons = [
    'home', 'user', 'cogs', 'briefcase', 'folder-open'

];
const resumeLink = "https://drive.google.com/file/d/1dc6JxClz_p1Ej2xPba5sF2opLrmhLfqC/view?usp=sharing";
function Logo() {
    return (<div><p className="logo-text"><span className="letter-1">K</span></p></div>);
}
function Navbar() {
    return <>
        <div className="container-fluid nav-bar p-3 sticky-top d-flex justify-content-lg-around justify-content-between">
            <Logo />
            <div className='d-flex'>
                <ul className="nav justify-content-center d-none d-lg-flex">
                    {navigationItems.map((item, index) => (<li className="nav-item" key={item}>
                        <a className="nav-link" href={'#' + item} key={item}><i className={`fa fa-${icons?.[index]}`} />&nbsp;{item}</a>
                    </li>))}
                </ul>
                <button className='d-lg-none text-bold toggle-icon' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-list' /></button>
                <a style={{ textDecoration: 'none' }} href={resumeLink} target='_blank'><button className='resume-btn d-none d-lg-inline'><i className='fa fa-download'></i>&nbsp;Resume</button></a>
            </div>
        </div>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className='offcan-header'>Explore</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="list-group" id="list-tab" role="tablist">
                    {navigationItems.map((item, index) => (
                        <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href={`#${item}`} role="tab" aria-controls="home"><i className={`fa fa-${icons?.[index]}`} />&nbsp;{item}</a>
                    ))}
                </div>
            </div>
        </div>
    </>
}
export default Navbar;