import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (data) => {
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_USER_ID")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
        reset();
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Kontakta oss</h2>

        <label htmlFor="name">Namn</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Namn är obligatoriskt</span>}

        <label htmlFor="email">E-post</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>E-post är obligatoriskt</span>}

        <label htmlFor="message">Meddelande</label>
        <textarea
          id="message"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && <span>Meddelande är obligatoriskt</span>}

        <button type="submit">Skicka</button>

        {submitted && <p className="confirmation">Tack för ditt meddelande!</p>}
      </form>
    </div>
  );
};

export default ContactForm;
