import Carousel from "../components/carousel";
import { Link } from "react-router-dom";

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
              Launch App <i className="bi bi-arrow-up-right"></i>
            </button>
          </Link>
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px auto",
          }}
        >
          {/* No text inside the box */}
        </div>
      </section>

      {/* ************************* section Three************************** */}
      <section className="container" style={{ marginTop: "2.5rem" }}>
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
          Summarizes interactions. Uncovers insights.
          <br /> Enhances creativity.
        </h3>

        <div
          style={{
            width: "1240px",
            height: "682px",
            background: "rgba(238, 238, 238, 1)",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px auto",
          }}
        >
          {/* No text inside the box */}
        </div>
      </section>

      {/* ************************* section four************************** */}
      <section className="container" style={{ marginTop: "2.5rem" }}>
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
          Discover new ideas. Explore passions.
          <br /> Solve complex challenges.
        </h3>
      </section>

      {/* ************************* section five************************** */}
      <section className="container" style={{ marginTop: "10rem" }}>
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
            margin: "5rem auto",
          }}
        >
          {/* Left Box */}
          <div
            style={{
              flex: 1,
              background: "rgba(238, 238, 238, 1)",
              borderRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            {/* No text inside the left box */}
          </div>

          {/* Right Box */}
          <div
            style={{
              flex: 1,
              background: "rgba(156, 156, 156, 1)",
              borderRadius: "10px",
            }}
          >
            {/* No text inside the right box */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
