export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid mainNav">
          <a className="navbar-brand" href="#">
            realme
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  realme smartphone
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  narzo smartphone
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Audio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Accessories
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Brand
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
