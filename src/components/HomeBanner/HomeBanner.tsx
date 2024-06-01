import './HomeBanner.css';
import bannerImage from '../../assets/home-banner.jpg';
import { FaInstagram, FaLinkedin, FaArrowAltCircleRight } from 'react-icons/fa';
import { motion } from "framer-motion";
function HomeBanner() {
    return <>
        <div className="container-fluid row align-items-center p-3 home-banner w-100" id="Home">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, x: [-300, 0] }} transition={{ ease: "easeOut", duration: 0.8 }} className="col-md-12 col-lg-6 justify-content-center text-center align-items-center p-5">
                <p className='display-4'>Hi, I'm <span className='header-name'>Karthikeyan.</span></p>
                <p className='display-6'><span className='profession-text'>Backend developer</span> with a passion for coding and a drive to master frontend technologies like Angular and React.</p>
                <div className="social-icons p-3">
                    <a href='https://www.linkedin.com/in/karthi-kn-420016185/' target='_blank' className='social-icon-link'><FaLinkedin className="social-icon" /></a>
                    <a href='https://www.linkedin.com/in/karthi-kn-420016185/' target='_blank' className='social-icon-link'><FaInstagram className="social-icon" /></a>
                    {/* <FaTwitter className="social-icon" /> */}
                </div>
                <a href="#About"><button className="btn btn-primary explore-button">Explore Portfolio&nbsp;<FaArrowAltCircleRight className='button-arrow' /></button></a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, x: [300, 0] }} transition={{ ease: "easeOut", duration: 0.8 }} className="col-md-12 col-lg-6 justify-content-center text-center align-items-center">
                <img src={bannerImage} className='img-fluid'></img>
            </motion.div>
        </div>

    </>
}
export default HomeBanner;