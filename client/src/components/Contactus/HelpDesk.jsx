import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import useResponsive from '../../hooks/useResponsive';

// first make sure to run "npm install emailjs-com"
//:-Satvik Singh
const Helpdesk = () => {
  const smallScreen = useResponsive(); // ✅ Hook used inside component

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

    // Prepare form data to be sent in the email
    const emailData = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        'service_9o6v8od',  // Replace with your service ID
        'template_ddl1qb8',  // Replace with your template ID
        emailData,           // Data to send (form values)
        'nuFqggl8nmWzxVECy'  // Your public API key
      )
      .then(
        (response) => {
          console.log('Success:', response);
          alert('Thank you for your feedback!');
          setFormData({
            name: '',
            email: '',
            mobile: '',
            message: '',
          });
        },
        (error) => {
          console.log('Error:', error);
          alert('Failed to send the message. Please try again later.');
        }
      );
  };

  // Styles defined inside component so smallScreen is accessible
  const styles = {
        helpdeskContainer: {
      width: 'min(90%, 600px)',

      maxWidth: '38rem',
      margin: smallScreen ? '1.25rem auto' : '4.5rem 4.5% 2.5rem 2%',
      padding: smallScreen ? '1rem 0.75rem' : '1.25rem',
      backgroundColor: '#f0f0f0',
      borderRadius: '0.5rem',
      boxShadow: '0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
    },

    heading: {
      fontSize: smallScreen ? '1.5rem' : '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1.25rem', // ~20px
    },

    formField: {
  marginBottom: smallScreen ? '0.75rem' : '1rem',
  width: '100%',
  flex: 1,
},


    formFieldRow: {
      display: 'flex',
      flexDirection: smallScreen ? 'column' : 'row',
      justifyContent: 'space-between',
      gap: smallScreen ? '0.5rem' : '5%',
      alignItems: 'stretch',
      width: '100%',
    },

    input: {
  width: '100%',
  padding: smallScreen ? '0.4rem 1rem' : '1.625rem',
  marginTop: '0.3125rem',
  border: '0.1875rem solid #ddd',
  borderRadius: '0.25rem',
  fontSize: '1rem',
},

    

    textarea: {
      width: '100%',
      height: '6.25rem', // ~100px
      padding: '0.625rem',
      marginTop: '0.3125rem',
      fontSize: '1rem',
      border: '1px solid #ccc',
      borderRadius: '0.25rem',
      resize: 'none',
    },

    submitButton: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
    }
  };

  return (
    <div style={styles.helpdeskContainer}>
      <h2 style={styles.heading}>Helpdesk</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formField}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            required 
            style={styles.input}
          />
        </div>
        <div style={styles.formFieldRow}>
          <div style={styles.formField}>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              required 
              style={styles.input}
            />
          </div>
          <div style={styles.formField}>
            <label htmlFor="mobile">Mobile:</label>
            <input 
              type="tel" 
              id="mobile" 
              name="mobile" 
              value={formData.mobile} 
              onChange={handleChange}
              required 
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.formField}>
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
            required 
            style={styles.textarea}
          />
        </div>
        <div>
          <button type="submit" style={styles.submitButton}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Helpdesk;
