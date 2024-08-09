import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h6 className="text-uppercase">About Us</h6>
            <p>
              We are a community of wildlife photography enthusiasts sharing our passion for nature and photography.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-dark">Home</a></li>
              <li><a href="#!" className="text-dark">Gallery</a></li>
              <li><a href="#!" className="text-dark">Blog</a></li>
              <li><a href="#!" className="text-dark">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h6 className="text-uppercase">Follow Us</h6>
            <ul className="list-unstyled d-flex justify-content-center">
              <li><a href="#!" className="text-dark me-4"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#!" className="text-dark me-4"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#!" className="text-dark me-4"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#!" className="text-dark"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-light" style={{ borderTop: '1px solid #e7e7e7' }}>
        &copy; {new Date().getFullYear()} Wildlife Photography Enthusiasts | All Rights Reserved
      </div>
    </footer>
  );
}
