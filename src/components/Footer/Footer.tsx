import { Logo } from '../navbar/navbar';
import './Footer.css';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
const navigationItems = [
    'Home', 'About', 'Skills', 'Experience', 'Projects'
];
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="d-flex flex-column flex-md-row justify-content-around align-items-center py-3">
                <div className="footer-section">
                    <div className="social-media d-flex">
                        <a href="https://linkedin.com/in/karthi-kn-420016185" target="_blank" ><FaLinkedin /></a>
                        <a href="https://github.com/Keyan-dev" target="_blank" ><FaGithub /></a>
                        <a href="https://wa.me/6382948440" target="_blank"><FaWhatsapp /></a>
                    </div>
                    <div className="d-flex align-item-center justify-content-center p-3 flex-wrap">
                        {navigationItems.map((item,index)=>(<a href={`#${item}`} key={index} rel="noopener noreferrer" className='mx-3 navigation-link'>{item}</a>))}
                    </div>
                    <div className='d-flex align-item-center justify-content-center'>
                    <Logo/>
                    </div>
                </div>
            </div>
            <hr />
            <p className="text-center text-body-secondary mb-0">&copy; 2024 Keyan-dev. Crafting with passion and precision.</p>
        </footer>
    );
}

export default Footer;
