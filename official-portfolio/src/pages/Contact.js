import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Contact - Melissa Weirick Portfolio</title>
        <meta
          name="Contact - Melissa Weirick Portfolio"
          content="Personal Portfolio of Web Design and Full Stack Development"
        />
      </Helmet>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Contact Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Get In Touch</h4>
                <div data-paperform-id="6zioppez"></div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Render contact info */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
