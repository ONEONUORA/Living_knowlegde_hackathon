import {Link, Outlet} from "react-router-dom"
import Logo from "../assets/Vector2.png"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{paddingLeft:"2rem", paddingRight:'2rem',paddingBottom:"1rem", borderBottom:'2px solid grey'}}>
        <div className="container-fluid">
          <Link to="/" style={{display:"flex", gap:"5px", textDecoration:"none"}}>
          <img src={Logo} alt="Logo" style={{width:"53px", height:"23px", marginTop:"10px"}}/>
          <p className="navbar-brand" href="#" style={{fontWeight:"bold", color:"black"}}>
            MindMeld
          </p>

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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" style={{fontWeight:"bold", color:"black"}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{fontWeight:"bold", color:"black"}}>
                  Features
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#" style={{fontWeight:"bold", color:"black"}}>
                  Contacts
                </a>
              </li>
        
            </ul>
        
              <button className="btn btn-primary" type="submit" style={{borderRadius:"50px", fontWeight:'bold', width:"173px"}}>
                Connect Wallet
              </button>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
