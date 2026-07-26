import './HomeBanner.css';
import bannerImage from '../../assets/hero-sketch.jpg';
import { FaGithub, FaLinkedin, FaArrowAltCircleRight, FaDownload } from 'react-icons/fa';
import { motion } from "framer-motion";
function HomeBanner() {
    const resumeLink = `${import.meta.env.BASE_URL}Karthikeyan_T_Fullstack_Developer.pdf`;
    return <>
        <div className="container-fluid row align-items-center home-banner w-100" id="Home">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, x: [-300, 0] }} transition={{ ease: "easeOut", duration: 0.8 }} className="col-md-12 col-lg-6 justify-content-center text-center text-lg-start align-items-center hero-copy">
                <p className='head-text-1'>Karthikeyan T</p>
                <h1 className='head-text-2'><span className='profession-text'>Senior Full Stack Developer</span> for scalable consumer web and mobile platforms.</h1>
                <p className='hero-summary'>I build production-ready Node.js, Angular, Ionic, and React systems with a focus on API performance, clean architecture, and reliable delivery.</p>
                <div className='hero-metrics' aria-label='Professional highlights'>
                    <div><strong>4+</strong><span>Years experience</span></div>
                    <div><strong>200 RPS</strong><span>Platform scale</span></div>
                    <div><strong>70%</strong><span>Latency improved</span></div>
                </div>
                <div className='hero-actions'>
                    <a href="#Experience"><button className="btn btn-primary explore-button">View Experience&nbsp;<FaArrowAltCircleRight className='button-arrow' /></button></a>
                    <a href={resumeLink} target='_blank' rel='noreferrer'><button className="btn btn-primary resume-hero-button"><FaDownload /> Resume</button></a>
                </div>
                <div className="social-icons">
                    <a href='https://www.linkedin.com/in/karthikeyan-t-420016185/' target='_blank' rel="noreferrer" className='social-icon-link' aria-label='LinkedIn profile'><FaLinkedin className="social-icon" /></a>
                    <a href='https://github.com/keyan-dev' target='_blank' rel="noreferrer" className='social-icon-link' aria-label='GitHub profile'><FaGithub className="social-icon" /></a>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, x: [300, 0] }} transition={{ ease: "easeOut", duration: 0.8 }} className="d-flex col-md-12 col-lg-6 justify-content-center text-center align-items-center banner-image-main-div">
                <div className='banner-image-div'> <img src={bannerImage} className='img-fluid banner-image'></img></div>
            </motion.div>
        </div>

    </>
}
export default HomeBanner;
