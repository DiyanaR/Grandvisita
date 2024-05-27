function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h5>Company Name</h5>
          <p>A brief description of the company.</p>
        </div>
        <div className="footer-center">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="#">Rooms</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h5>Contact Us</h5>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
