
import "../CSS/Header.css";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>📧 www.mycompany.com</span>
          <span>📞 +91 86984 68448</span>
        </div>
        <div className="social-icons">
          <a href="#">
            <FaXTwitter />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <IoLogoInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;