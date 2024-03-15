import './aboutUs.css';
import aboutUsImage from '../../assets/about.png';
const AboutUs = () => {
    return (
        <div className="row container-fluid about-us-container align-items-center justify-content-center">
            <div className='col-md-12 col-lg-6 justify-content-center align-items-center container-fluid'>
                <img src={aboutUsImage} className='img-fluid about-us-image' />
            </div>
            <div className='col-md-12 col-lg-6 container-fluid justify-content-center align-items-center text-center p-4 text-white'>
                <p className='display-5'>About me</p>
                <p className='h6'>
                    I am Currently a software enginner
                </p>
            </div>
        </div>
    )
}

export default AboutUs;