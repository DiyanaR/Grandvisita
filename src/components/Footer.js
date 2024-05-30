// import React from "react";
// import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
// import styled from "styled-components";

// const FooterContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
//   justify-content: center;
//   align-items: start;
//   height: 350px;
//   background-color: #1a1a1a;

//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//     height: auto;
//     padding: 20px;
//   }
// `;

// const FooterContent = styled.div`
//   margin-top: 50px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;

//   h1 {
//     font-size: 36px;
//     font-family: "Russo One", sans-serif;
//     color: white;
//     margin-bottom: 10px;
//   }

//   p {
//     font-family: "Source Sans 3", sans-serif;
//     font-size: 18px;
//     color: white;

//     &.city::before,
//     &.contact-detail::before {
//       content: "";
//       display: block;
//       margin: 10px 0;
//     }

//     &.city,
//     &.contact-detail {
//       display: block;
//     }
//   }

//   @media screen and (max-width: 768px) {
//     margin-top: 20px;

//     h1 {
//       font-size: 28px;
//     }

//     p {
//       font-size: 16px;
//     }
//   }
// `;

// const SocialFooterContent = styled(FooterContent)`
//   h1 {
//     color: white;
//   }

//   .social-icons {
//     margin-top: 12px;

//     a {
//       color: white;
//       font-size: 24px;
//       margin: 0 10px;
//       text-decoration: none;
//       transition: color 0.3s;
//     }
//   }
// `;

// function Footer() {
//   return (
//     <FooterContainer>
//       <FooterContent>
//         <div className="content-section">
//           <h1>Här finns vi</h1>
//         </div>
//         <div className="content-section">
//           <p>
//             <span className="city">Stockholm,</span>
//             <br /> Trekantsvägen 1
//           </p>
//           <p>
//             <span className="city">Göteborg,</span>
//             <br /> Ebbe Lieberathsgatan 18 c
//           </p>
//         </div>
//       </FooterContent>
//       <FooterContent>
//         <div className="content-section">
//           <h1>Hör av dig</h1>
//         </div>
//         <div className="content-section">
//           <p>Grandvisita@hotmail.se</p>
//           <p>070-5169513</p>
//         </div>
//       </FooterContent>
//       <SocialFooterContent>
//         <h1>Socialt</h1>
//         <div className="social-icons">
//           <a
//             href="https://www.instagram.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://www.facebook.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaFacebook />
//           </a>
//           <a
//             href="https://www.twitter.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaTwitter />
//           </a>
//         </div>
//       </SocialFooterContent>
//     </FooterContainer>
//   );
// }

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="content-section">
          <h1>Quick links</h1>
        </div>
        <div className="content-section">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/rooms" className="footer-link">
            Rooms
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>
      </div>
      <div className="footer-content">
        <div className="content-section">
          <h1>Contact Information</h1>
        </div>
        <div className="content-section">
          <p>Grandvisita@hotmail.se</p>
          <p>070-5169513</p>
        </div>
      </div>
      <div className="social-footer-content">
        <h1 className="social">Socialt</h1>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 Grandvisita. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
