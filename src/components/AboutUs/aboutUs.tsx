import './aboutUs.css';
import aboutUsImage from '../../assets/about.png';
import { motion } from 'framer-motion';
const AboutUs = () => {
    return (
        <div className="row container-fluid about-us-container align-items-center justify-content-center" id="About">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, x: [-100, 0], scale: [0.5, 1] }} transition={{ duration: 0.5 }} className='col-md-12 col-lg-6 justify-content-center align-items-center container-fluid'>
                <img src={aboutUsImage} className='img-fluid about-us-image' />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, x: [200, 0] }} transition={{ duration: 0.5 }} className='col-md-12 col-lg-6 container-fluid justify-content-center align-items-center text-center p-4 text-white'>
                <h2 className='display-6 p-3'><strong><u>About me</u></strong></h2>
                <p className='about-me-content p-2'>
                    I am Karthikeyan, a dedicated B.Tech graduate with a fervent passion for programming. Currently employed as a backend developer, I am ardently pursuing mastery in frontend technologies like Angular and React to evolve into a proficient full-stack developer.
                </p>
            </motion.div>
        </div>
    )
}

export default AboutUs;