import { Link } from "react-router-dom";
import eth from "../assets/ethereumorg_logo.png.png";
const Withdraw = () => {
  return (
    <>
      <section className="container mt-5">
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
            <p style={{ fontWeight: "500", fontSize: "16px" }}>Revenue</p>
          </div>
        </div>
      </section>

      <section
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(238,238,238,1)",
          paddingTop: "2rem",
        }}
      >
        <div>
          <p style={{ fontWeight: "500", fontSize: "25px" }}>
            Deposit and Withdraw Revenue
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="btn"
            style={{
              width: "183px",
              height: "40px",
              borderRadius: "40px",
              backgroundColor: "rgba(29,35,64,1)",
              color: "white",
            }}
          >
            Withdraw Revenue
          </button>

          <Link to="/revenue">
            <button
              className="btn"
              style={{
                width: "183px",
                height: "40px",
                borderRadius: "40px",
                backgroundColor: "rgba(217, 217, 217, 1)",
                color: "white",
              }}
            >
              Deposit Revenue
            </button>
          </Link>
        </div>
      </section>

      <section
        className="container"
        style={{
          backgroundColor: "rgba(238,238,238,1)",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <div>
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              paddingLeft: "29rem",
            }}
          >
            Amount
          </p>
        </div>
        <div
          style={{ display: "flex", gap: "10rem", justifyContent: "center" }}
        >
          <p style={{ fontWeight: "500", fontSize: "40px" }}>0</p>

          <button
            className="btn"
            style={{
              width: "121px",
              height: "50px",
              borderRadius: "60px",
              backgroundColor: "rgba(29,35,64,1)",
              color: "white",
            }}
          >
            <img
              src={eth}
              alt="Eth logo"
              style={{ width: "40px", height: "40px" }}
            />
            ETH
          </button>
        </div>

        {/* Centered borderBottom */}
        <div
          style={{
            borderBottom: "2px solid black",
            width: "50%",
            margin: "2rem auto",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>

        <button
          className="btn btn-primary"
          type="submit"
          style={{
            display: "block",
            margin: "0 auto",
            borderRadius: "40px",
            fontWeight: "bold",
            width: "141px",
            height: "40px",
          }}
        >
          Withdraw
        </button>
      </section>
    </>
  );
};

export default Withdraw;
