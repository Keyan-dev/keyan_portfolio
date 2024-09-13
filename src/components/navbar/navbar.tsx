import { motion, useScroll } from 'framer-motion';
import './navbar.css';
const navigationItems = [
    'Home', 'About', 'Skills', 'Experience', 'Projects'
];
const icons = [
    'home', 'user', 'cogs', 'briefcase', 'folder-open'

];
const resumeLink = "https://drive.google.com/file/d/1dc6JxClz_p1Ej2xPba5sF2opLrmhLfqC/view?usp=sharing";
export function Logo() {
    return (<div><p className="logo-text"><span className="letter-1">K</span></p></div>);
}
function Navbar() {
    const { scrollYProgress } = useScroll();
    return <div className="sticky-top nav-bar-container">
        <motion.div
            className="scroll-progress-bar"
            style={{ scaleX: scrollYProgress }}
        />
        <div className="container-fluid nav-bar p-3  d-flex justify-content-lg-around justify-content-between">
            <Logo />
            <div className='d-flex'>
                <ul className="nav justify-content-center d-none d-lg-flex">
                    {navigationItems.map((item, index) => (<li className="nav-item" key={item}>
                        <a className="nav-link" href={'#' + item} key={item}><i className={`fa fa-${icons?.[index]}`} />&nbsp;{item}</a>
                    </li>))}
                </ul>
                <a style={{ textDecoration: 'none' }} href={resumeLink} target='_blank'><button className='resume-btn'><i className='fa fa-download'></i>&nbsp;Resume</button></a>
                <button className='d-lg-none text-bold resume-btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-list' />&nbsp;Explore</button>
            </div>
        </div>
        <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className='offcan-header'><Logo /></h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="list-group">
                    {navigationItems.map((item, index) => (
                        <a className="list-group-item" key={item} href={`#${item}`}><i className={`fa fa-${icons?.[index]}`} />&nbsp;{item}</a>
                    ))}
                </div>
            </div>
        </div>
    </div>
}
export default Navbar;