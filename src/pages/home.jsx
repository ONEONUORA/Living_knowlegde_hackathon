/* eslint-disable react/no-unescaped-entities */
import Carousel from "../components/carousel";
import { Link } from "react-router-dom";
import Desktop from "../components/desktopPicture";

const Home = () => {
  return (
    <>
      {/* ************************* section one************************** */}
      <section className="container" style={{ marginTop: "1rem" }}>
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="">
            <h3 style={{ fontWeight: "600", fontSize: "20px" }}>
              TwinGenie AI
            </h3>
          </div>

          <div className="">
            <ul style={{ display: "flex", gap: "20px", listStyleType: "none" }}>
              <li style={{ fontWeight: "500", fontSize: "16px" }}>
                Co-Authoring
              </li>
              <li style={{ fontWeight: "500", fontSize: "16px" }}>Revenue</li>
              <li style={{ fontWeight: "500", fontSize: "16px" }}>Insights</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <p
            style={{
              fontWeight: "600",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            TwinGenie AI
          </p>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Experience the Future with an AI-Powered <br />
            Digital Twin of MindMeld.
          </h3>

          <p
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: "500",
              flexDirection: "column",
              marginBottom: "2rem",
            }}
          >
            Engage in real time conversations, co-author projects and shape the
            future together
          </p>

          <div style={{display:'flex', gap:"15px", justifyContent:"center", alignItems:"center"}}>
            <Link to="/twinHome">
              <button
                className="btn btn-primary"
                type="submit"
                style={{
                  borderRadius: "50px",
                  width: "174px",
                  fontWeight: "bold",
                  margin: "0 auto",
                  display: "block",
                }}
              >
                Launch AI <i className="bi bi-arrow-up-right"></i>
              </button>
            </Link>
            <Link to="/revenue" style={{textDecoration:"none"}}>
              <button
                className="btn btn-outline-primary"
                type="submit"
                style={{
                  borderRadius: "50px",
                  width: "174px",
                  fontWeight: "bold",
                  margin: "0 auto",
                  display: "block",
                  
                }}
              >
                Revenue <i className="bi bi-arrow-up-right"></i>
              </button>
            </Link>
          </div>
        </div>

        <Carousel />
      </section>

      {/* ************************* section two************************** */}
      <section className="container" style={{ marginTop: "2.5rem" }}>
        <h3
          style={{
            fontWeight: "500",
            fontSize: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Brainstorms, co-creates, refines,
          <br /> and brings your ideas to life
        </h3>

        <div
          style={{
            width: "1240px",
            height: "682px",
            background: "rgba(238, 238, 238, 1)",
            borderRadius: "10px",
            paddingLeft: "12rem",
            paddingRight: "5rem",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <Desktop />
        </div>
      </section>

      {/* ************************* section three************************** */}
      {/* <section className="container" style={{ marginTop: "2rem" }}>
        <h3
          style={{
            fontWeight: "500",
            fontSize: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Unlock more possibilities with MindMeld AI
        </h3>
        <div
          style={{
            width: "1240px",
            height: "682px",
            borderRadius: "10px",
            display: "flex",
            margin: "2rem auto",
          }}
        >
         
          <div
            style={{
              flex: 1,
              background: "rgba(238, 238, 238, 1)",
              borderRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            
          </div>

          <div
            style={{
              flex: 1,
              background: "rgba(156, 156, 156, 1)",
              borderRadius: "10px",
            }}
          >
          
          </div>
        </div>
      </section> */}

      {/* *************************************section four***************************** */}
      <section
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop:"2rem auto"
        }}
      >
        <p style={{ fontWeight: "500", fontSize: "30px" }}>Disclaimer</p>
        <p style={{ fontWeight: "400", fontSize: "16px" }}>
          The AI-powered digital twin of MindMeld is an interactive
          representation based on publicly available data, including speeches,
          interviews, and writings. While every effort has been made to ensure
          the accuracy and authenticity of the digital twin's responses, it is
          important to note that this is a simulated experience and may not
          perfectly reflect the original views, opinions, or personality of
          MindMeld.
        </p>
        <p style={{ fontWeight: "400", fontSize: "16px" }}>
          Additionally, the revenue-sharing mechanism is facilitated through
          smart contracts and blockchain technology. Users should understand the
          risks involved in blockchain transactions, including potential
          fluctuations in value and transaction times. The creators of this
          platform are not liable for any financial losses or discrepancies
          related to the distribution of revenue or use of the platform
        </p>

        <p style={{ fontWeight: "400", fontSize: "16px" }}>
          By using this website, you agree to engage responsibly and understand
          that interactions with the AI are intended for educational and
          entertainment purposes only, not for legal, financial, or personal
          advice.
        </p>
      </section>

      <section
        className="container"
        style={{
          backgroundColor: "rgba(238, 238, 238, 1)",

          marginBottom: "2rem",
          height: "80px",
        }}
      >
        <p
          style={{
            fontWeight: "500",
            fontSize: "17px",
            paddingTop: "1.5rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Hackathon 2024 | MindMeld.
        </p>
      </section>
    </>
  );
};

export default Home;
