import { useContext } from 'react';
import './ContactForm.css';
// import contactImage from "../../assets/contact.jpg"
const ContactForm = ({toggleFunction}) => {
    return (
        <div className='contact-form-container'>
            <div className="contact-us-header d-flex justify-content-between align-items-center">
                <h6 className='header-title'>Reach out now!</h6>
                <i className='fa fa-close close-icon' onClick={()=>toggleFunction(false)}></i>
            </div>
            <form action="">
            <div className='contact-form-content'>

                <div className="form-group">
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name"/>
    
  </div>
                <div className="form-group">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
  </div>
  <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter your Message" rows={5}></textarea>
  </div>

            <div className="contact-form-button">
                <button className='btn primary-button text-white'>Connect with Me</button>
            </div>
            </div>
            </form>
        </div>
    )
}
export default ContactForm