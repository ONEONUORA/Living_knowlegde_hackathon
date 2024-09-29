import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/Vector2.png";
import img1 from "../assets/search-01.png";
const NavbarTwin = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "rgba(241, 241, 241, 1)" }}
      >
        <div className="container">
          <Link
            to="/"
            style={{ display: "flex", gap: "5px", textDecoration: "none" }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "53px", height: "23px", marginTop: "15px" }}
            />
            <a
              className="navbar-brand"
              href="#"
              style={{ fontSize: "28px", fontWeight: "400" }}
            >
              TwinGenieAI
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div style={{ position: "relative", width: "", marginTop:"1.5rem" }}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search prompts and help lines..."
                  aria-label="Search"
                  style={{
                    width: "484px",
                    height: "40px",
                    borderRadius: "24px",
                    backgroundColor: "rgba(241, 241, 241, 1)",
                    textAlign: "start",
                    fontSize: "12px",
                    fontWeight: "400",
                    paddingRight: "50px",
                  }}
                />

                <button className="btn">
                  <img
                    src={img1}
                    alt="Image"
                    style={{
                      position: "absolute",
                      right: "15px",
                      height: "24px",
                      width: "24px",
                      // transform: "translateY(-50%)",
                      top:"15%",
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                     
                    }}
                  />
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  float: "right",
                  marginLeft: "10rem",
                  marginTop:"1.5rem"
                }}
              >
                <i className="bi bi-globe" style={{ marginTop: "8px" }}></i>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EN
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        FR
                      </a>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <a className="dropdown-item" href="#">
                        ES
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </li>
              </div>
            </ul>

            <button
              className="btn btn-primary"
              type="submit"
              style={{ width: "165px", height: "42px", borderRadius: "24px" }}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavbarTwin;
