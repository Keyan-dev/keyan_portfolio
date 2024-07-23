import './ContactForm.css';
import { useEffect, useState } from 'react';
import API_PATHS from '../../configs/API_URLS';
const Spinner = () => (
  <>
    <div className="spinner-border spinner-border-sm text-white" role="status">
      <span className="visually-hidden">Connecting...</span>
    </div>
    &nbsp;Connecting...
  </>
);
const ContactForm = ({ toggleFunction=(data:boolean)=>{console.log(data);} }) => {
  const [contactForm, setContactForm] = useState({ name: '', message: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // Validate form fields
    if (contactForm.name !== '' && contactForm.message !== '' && contactForm.email !== '' && contactForm.email.includes('@')) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [contactForm]);

  const setValue = (field: 'name' | 'message' | 'email' | 'isValid', value: string) => {
    if(value.trim()==''){value=''}
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setContactForm({ name: '', email: '', message: '' });
  };

  const createUserQueries = async () => {
    if (formValid) {
      setLoading(true);
      try {
        const response = await fetch(`${API_PATHS.baseURL}${API_PATHS.userQuery}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contactForm)
        });

        setLoading(false);
        if (response.ok) {
          const data = await response.json();
          setMessage(data.message);
          resetForm();
          resetMessage();
          setError('');
          console.log(data);
        } else {
          setError('Sorry! Failed to connect! Try again sometime.');
          console.error(`HTTP error ${response.status}`);
        }
      } catch (err) {
        setLoading(false);
        setError('Sorry! Failed to connect! Try again sometime.');
        console.error('Error:', err);
      }
    }
  };

  const resetMessage = () => {
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <div className='contact-form-container'>
      <div className="contact-us-header d-flex justify-content-between align-items-center">
        <h6 className='header-title'>Reach out now!</h6>
        <i className='fa fa-close close-icon' onClick={() => toggleFunction(false)}></i>
      </div>
      {message !== '' && <div className='px-3 pt-3 text-center'><p>😍{message}</p></div>}
      {error !== '' && <div className='px-3 pt-3 text-danger text-center'><p>{error}</p></div>}
      <form className='was-validated'>
        <div className='contact-form-content'>
          <div className="form-group">
            <input type="text" className="form-control" id="nameInput" value={contactForm.name} onChange={(e) => setValue('name', e.target.value)} aria-describedby="emailHelp" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" value={contactForm.email} onChange={(e) => setValue('email', e.target.value)} id="emailInput" aria-describedby="emailHelp" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <textarea className="form-control" id="messageInput" value={contactForm.message} onChange={(e) => setValue('message', e.target.value)} placeholder="Enter your Message" rows={5} required></textarea>
          </div>
          <div className="contact-form-button">
            <button className='btn primary-button text-white' type="button" disabled={!formValid || loading} onClick={createUserQueries}>{loading ? <Spinner /> : 'Connect with Me'}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
