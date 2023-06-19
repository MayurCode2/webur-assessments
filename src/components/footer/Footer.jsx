import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <div className="info-container">
          <div className="info-1">
            <h1>Our Company</h1>
            <p>
              About Webure <br />
              Pricing <br />
              Referral Program <br />
              #GivingBackToCommunity <br />
              Employee Referral <br />
              Our Culture <br />
              Corporate Social Responsibility <br />
              Careers <br />
              Contact Us <br />
              FAQs <br />
            </p>
          </div>

          <div className="info-1">
            <h1>Build Your Team</h1>
            <p>
              How It Works
              <br />
              Why offshore
              <br />
              Pricing Estimator <br />
              Video Profiles
              <br />
              About Webure
              <br />
              Remote Blogs
              <br />
              Take The Assignment
              <br />
            </p>
          </div>

          <div className="info-1">
            <h1>Service</h1>
            <p>
              SEO Service SME Service
              <br />
              Email Marketing
              <br />
              Design Services
              <br />
              Front-End Development
              <br />
              Wordpress Devlopment
              <br />
              HubSpot Development
              <br />
              Marketo Autoimotion
              <br />
              Salesforce Automation
              <br />
            </p>
          </div>

          <div className="info-1">
            <h1>Resources</h1>
            <p>
              Blogs
              <br />
              Prodcast
              <br />
              Case Studies
              <br />
              Testimonials
              <br />
              eBooks
              <br />
              Infographics
              <br />
            </p>
          </div>
        </div>
        <div className="devicer"></div>

        <div className="'info-cantainer-2">
          <div className="cntr-2">
            <div className="search">
              <label>
                Sign up for Webure Emails:
                <input className="search-in" type="text" />
              </label>
              <button className="search-btn">search</button>
            </div>

            <div className="info-drop-1">
              <label htmlFor="dropdown">Select an option:</label>
              <select id="dropdown" className="info-drop">
                <option value="">Select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>

            <div className="info-social-i">
              <img src="./ant-design_google-plus-outlined.svg" alt="img" />
              <img src="./ant-design_instagram-filled.svg" alt="img" />
              <img src="./ant-design_twitter-outlined.svg" alt="img" />
              <img src="./bi_youtube.svg" alt="img" />
              <img src="./dashicons_facebook-alt.svg" alt="img" />
            </div>
          </div>
        </div>

        <div className="contact-imfo">
          <p>+91-0123456789</p>
          <br />
          <p>sales@webure.in</p>
        </div>

        <div className="devicer"></div>

        <div className="imfo-last">
          <div className="info-2">
            <h1> India</h1>
            <p className="city">Bangalore</p>
            <p className="add">#310G, Whitefield Post Office <br />
            Road, Whiefield, Bangalore, <br /> Karnataka 560103, India
            </p>
          </div>

          <div className="devicer-v"></div>

          <div className="info-2">
            <h1> India</h1>
            <p className="city">Bangalore</p>
            <p className="add">#310G, Whitefield Post Office <br />
            Road, Whiefield, Bangalore, <br /> Karnataka 560103, India
            </p>
          </div>

          <div className="devicer-v"></div>

          <div className="info-2">
            <h1> India</h1>
            <p className="city">Bangalore</p>
            <p className="add">#310G, Whitefield Post Office <br />
            Road, Whiefield, Bangalore, <br /> Karnataka 560103, India
            </p>
          </div>

          
          <div className="devicer-v"></div>

          <div className="info-2">
            <h1> India</h1>
            <p className="city">Bangalore</p>
            <p className="add">#310G, Whitefield Post Office <br />
            Road, Whiefield, Bangalore, <br /> Karnataka 560103, India
            </p>
          </div>


        </div>
        <div className="devicer-h1"></div>
        <div className="imfo-end">

        <p>© 2021 Webure Technologies. All rights reserved. Privacy Policy  |  ISMS Policy  </p>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
