import "../CSS/Footer.css"

const Footer = () => {
  return (
    <footer className="bg-teal  pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Impact Section */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Impact</h5>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="social-icons d-flex justify-content-start mt-3">
              <a href="#" className="me-3">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className=" me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Useful Links</h5>
            <p><a href="#" className=" text-decoration-none">Home</a></p>
            <p><a href="#" className="text-decoration-none">About us</a></p>
            <p><a href="#" className=" text-decoration-none">Services</a></p>
            <p><a href="#" className=" text-decoration-none">Terms of service</a></p>
            <p><a href="#" className=" text-decoration-none">Privacy policy</a></p>
          </div>

          {/* Our Services Section */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Our Services</h5>
            <p><a href="#" className=" text-decoration-none">Web Design</a></p>
            <p><a href="#" className=" text-decoration-none">Web Development</a></p>
            <p><a href="#" className=" text-decoration-none">Product Management</a></p>
            <p><a href="#" className=" text-decoration-none">Marketing</a></p>
            <p><a href="#" className=" text-decoration-none">Graphic Design</a></p>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact Us</h5>
            <p><i className="fas fa-home me-3"></i> A108 Adam Street, New York, NY 535022, United States</p>
            <p><i className="fas fa-phone me-3"></i> +1 5589 55488 55</p>
            <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">
              &copy; Copyright <strong>Impact</strong>. All Rights Reserved
              <br />
              Designed by BootstrapMade Distributed by ThemeWagon
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;