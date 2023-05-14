import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import * as Icon from "react-feather";

import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

function Contact() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const sendEmail = (templateId, templateParams, event) => {
    event.preventDefault();
    emailjs
      .sendForm("service_ewavj19", templateId, event.target, "T8sA4laONCJsfRyct")
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        setMessage("Your message has been sent!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setMessage(
          "Error sending email: Please call (801) 386-6272 for assistance"
        );
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      !formdata.name ||
      !formdata.email ||
      !formdata.subject ||
      !formdata.message
    ) {
      setError(true);
      setMessage("All fields are required");
    } else {
      setError(false);
      sendEmail("template_7f7o9i8", {
        name: formdata.name,
        email: formdata.email,
        subject: formdata.subject,
        message: formdata.message
      }, event);
      setFormdata({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };

  const numberFormatter = (number) => {
    const phnNumber = number;
    return phnNumber;
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.emailjs.com/sdk/2.6.4/email.min.js";
    script.onload = () => {
      emailjs.init("T8sA4laONCJsfRyct");
      setScriptLoaded(true);
    };
    document.body.appendChild(script);

    setTimeout(() => {
      setPhoneNumbers(["+1 (801) 386-6272"]);
      setEmailAddress(["melissaweirickdesigns@gmail.com"]);
      setAddress("Woods Cross, UT 84087 USA");
    }, 1000);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  

  return (
    <Layout>
      <Helmet>
        <title>Contact - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Contact Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Contact Me" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-contact-formwrapper">
                  <h4>Get In Touch</h4>
                  <form
                    action="#"
                    className="mi-form mi-contact-form"
                    onSubmit={submitHandler}
                  >
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-name">
                        Enter your name*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="contact-form-name"
                        value={formdata.name}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-email">
                        Enter your email*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="email"
                        id="contact-form-email"
                        value={formdata.email}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-subject">
                        Enter your subject*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="subject"
                        id="contact-form-subject"
                        value={formdata.subject}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-message">
                        Enter your Message*
                      </label>
                      <textarea
                        onChange={handleChange}
                        name="message"
                        id="contact-form-message"
                        cols="30"
                        rows="6"
                        value={formdata.message}
                      ></textarea>
                    </div>
                    <div className="mi-form-field">
                      <button className="mi-button" type="submit">
                        Send Mail
                      </button>
                    </div>
                  </form>
                  {handleAlerts()}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-contact-info">
                  {!phoneNumbers ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Phone />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Phone</h6>
                        {phoneNumbers.map((phoneNumber) => (
                          <p key={phoneNumber}>
                            <a href={numberFormatter(phoneNumber)}>
                              {phoneNumber}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {!emailAddress ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Mail />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Email</h6>
                        {emailAddress.map((email) => (
                          <p key={email}>
                            <a href={`mailto:${email}`}>{email}</a>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {!phoneNumbers ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.MapPin />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Address</h6>
                        <p>{address}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Contact;
