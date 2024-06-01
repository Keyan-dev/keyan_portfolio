import './ContactForm.css';
// import contactImage from "../../assets/contact.jpg"
const ContactForm = () => {
    return (
        <div className=''>
            <div className='row container-fluid contact-form-container'>
                <div className='col-lg-5 col-md-12 p-5 container-fluid align-items-center justify-content-center'>
                    <h3 className='h1 text-center text-white p-4 m-4'>Stay in touch</h3>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <label className="form-label">Name</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <label className="form-label">Email</label>
                    </div>
                    <div className="form-floating mb-4">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={5}></textarea>
                        <label className="form-label">Message</label>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <a className='btn btn-light align-items-end'>send message</a>
                    </div>
                </div>
                {/* <div className='col-lg-7 col-md-12 justify-content-center align-items-center container-fluid'>
                    <img src={contactImage} className='contact-img' />
                    <p>sdf</p>
                </div> */}
            </div>
        </div>
    )
}
export default ContactForm