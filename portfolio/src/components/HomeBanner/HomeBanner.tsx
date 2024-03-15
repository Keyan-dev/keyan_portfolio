import './HomeBanner.css';
import bannerImage from '../../assets/home-banner.jpg';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
function HomeBanner() {
    return <>
        <div className="container-fluid row align-items-center p-3 home-banner w-100">
            <div className="col-md-12 col-lg-6 justify-content-center text-center align-items-center">
                <p className='display-3'>I am Karthikeyan</p>
                <p className='display-6'>
                    I am a full stack developer.
                </p>
                <div className="social-icons p-3">
                    <FaInstagram className="social-icon" />
                    <FaTwitter className="social-icon" />
                    <FaLinkedin className="social-icon" />
                </div>
                <button className="btn btn-primary explore-button">Explore Portfolio</button>
            </div>
            <div className="col-md-12 col-lg-6 justify-content-center text-center align-items-center">
                <img src={bannerImage} className='img-fluid'></img>
            </div>
        </div>
    </>
}
export default HomeBanner;