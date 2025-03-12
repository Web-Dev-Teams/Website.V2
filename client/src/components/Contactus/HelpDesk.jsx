import React, { useState } from 'react';

const Helpdesk = () => {
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
    // Handle form submission logic (e.g., sending data to an API)
    alert('Thank you for your feedback!');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: ''
    });
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

const styles = {
    helpdeskContainer: {
        width: '450px',
        height: 'auto',
        marginLeft: '30px',
        marginRight: '70px',
        marginTop: '75px', 
        marginBottom:'40px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
      },
      
      
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  formField: {
    marginBottom: '15px',
    width: '100%',
  },
  formFieldRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
  height: '100px', 
  padding: '10px',
  marginTop: '5px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  resize: 'none', 
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#000', 
    color: '#fff', 
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  }
};

export default Helpdesk;
