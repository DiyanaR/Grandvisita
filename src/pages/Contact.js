import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name) {
      setErrors({ name: "Name is required" });
      return;
    }

    if (!formData.email) {
      setErrors({ email: "Email is required" });
      return;
    }

    if (!formData.message) {
      setErrors({ message: "Message is required" });
      return;
    }

    console.log("Form submitted:", formData);

    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span>{errors.message}</span>}

        <button type="submit">Submit</button>

        {submitted && (
          <p className="confirmation">Thank you for your message!</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
