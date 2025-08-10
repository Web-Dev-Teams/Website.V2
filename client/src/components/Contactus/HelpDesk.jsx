import { useState } from 'react';
import emailjs from 'emailjs-com';
import useResponsive from '../../hooks/useResponsive';

const Helpdesk = () => {
  const smallScreen = useResponsive(700);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_9o6v8od',
        'template_ddl1qb8',
        formData,
        'nuFqggl8nmWzxVECy'
      )
      .then(
        () => {
          alert('Thank you for your feedback!');
          setFormData({ name: '', email: '', mobile: '', message: '' });
        },
        () => {
          alert('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div className="helpdesk-responsive-container">
      <h2 className="helpdesk-heading">Helpdesk</h2>
      <form className="helpdesk-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="helpdesk-row">
          <div className="helpdesk-field">
            <label htmlFor="name">Name</label>
            <input
              type="text" id="name" name="name" value={formData.name}
              onChange={handleChange} required autoComplete="off"
            />
          </div>
          <div className="helpdesk-field">
            <label htmlFor="email">Email</label>
            <input
              type="email" id="email" name="email" value={formData.email}
              onChange={handleChange} required autoComplete="off"
            />
          </div>
        </div>
        <div className="helpdesk-row">
          <div className="helpdesk-field">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel" id="mobile" name="mobile" value={formData.mobile}
              onChange={handleChange} required autoComplete="off"
            />
          </div>
        </div>
        <div className="helpdesk-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message" name="message" value={formData.message}
            onChange={handleChange} required rows={4}
          />
        </div>
        <button type="submit" className="helpdesk-submit">Submit</button>
      </form>
    </div>
  );
};

export default Helpdesk;
