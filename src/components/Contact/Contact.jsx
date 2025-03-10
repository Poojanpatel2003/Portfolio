import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwvhnCFqQMyWfo3R1Uia1PO9iRI-UPjorIqGZieeJXyfcBC_FCdMLpqnm2zE3D7lgdBIA/exec";

  const [formData, setFormData] = useState({
    name: "", // Changed to lowercase
    email: "",
    subject: "",
    message: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // Helps to bypass CORS issues
        body: form,
      });

      setMsg("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setMsg("Failed to send message.");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="contact">
          <div className="get">
            <h1>Get in Touch</h1>
            <div className="div">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name" // Changed to lowercase
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <br />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <br />
              <button type="submit" className="btn-box">
                Submit
              </button>
              
              
            </form>
            <span id="msg">{msg}</span>
            </div>
          </div>

          

          <div className="personal">
            <p>
              <b>E-mail : </b>
              <a href="mailto:poojanpatel1595@gmail.com">
                poojanpatel1595@gmail.com
              </a>
            </p>
            <p>
              <b>Phone No : </b>
              <a href="tel:+919722379175">+91 9722379175</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
