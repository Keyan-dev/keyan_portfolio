import './HomeBanner.css';
import bannerImage from '../../assets/home-banner.jpg';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";
function HomeBanner() {
    return <>
        <div className="container-fluid row align-items-center p-3 home-banner w-100">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, x: [-300, 0] }} transition={{ ease: "easeOut", duration: 0.8 }} className="col-md-12 col-lg-6 justify-content-center text-center align-items-center p-5">
                <p className='display-3'>Hi, I'm Karthikeyan.</p>
                <p className='display-6'>Backend developer with a passion for coding and a drive to master frontend technologies like Angular and React.</p>
                <div className="social-icons p-3">
                    <FaInstagram className="social-icon" />
                    <FaTwitter className="social-icon" />
                    <FaLinkedin className="social-icon" />
                </div>
                <button className="btn btn-primary explore-button">Explore Portfolio</button>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, x: [300, 0] }} transition={{ ease: "easeOut", duration: 0.8 }} className="col-md-12 col-lg-6 justify-content-center text-center align-items-center">
                <img src={bannerImage} className='img-fluid'></img>
            </motion.div>
        </div>
    </>
}
export default HomeBanner;