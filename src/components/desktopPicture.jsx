import Logo from "../assets/logo(6).png";
import img1 from "../assets/search-01.png";
import img4 from "../assets/mic-01.png";
import img3 from "../assets/sent.png";

const Desktop = () => {
  return (
    <>
      <div
        style={{
          width: "855px",
          height: "65px",
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          backgroundColor: "rgba(246,246,246,1)",
          paddingTop: "1.5rem",
        }}
      >
        <div>
          <p style={{ display: "flex", gap: "5px", textDecoration: "none" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "10.18px", height: "13.57px", marginTop: "px" }}
            />
            <h1
              className=""
              style={{
                fontSize: "15.35px",
                fontWeight: "400",
                color: "rgba(1,1,1,1)",
              }}
            >
              TwinGenieAI
            </h1>
          </p>
        </div>

        <div
          style={{
            position: "relative",
            width: "273.69px",
            height: "22.62px",
            marginTop: "",
          }}
        >
          <input
            className="form-control"
            type="search"
            placeholder="Search prompts and help lines..."
            aria-label="Search"
            disabled={true}
            style={{
              width: "px",
              height: "px",
              borderRadius: "13.57px",
              backgroundColor: "rgba(241, 241, 241, 1)",
              textAlign: "start",
              fontSize: "6.79px",
              fontWeight: "400",
              paddingRight: "px",
            }}
          />

          <button className="btn">
            <img
              src={img1}
              alt="Image"
              style={{
                position: "absolute",
                right: "15px",
                height: "13.57px",
                width: "13.57px",
                // transform: "translateY(-50%)",
                top: "15%",
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

            marginLeft: "",
            marginTop: "0.1rem",
          }}
        >
          <i
            className="bi bi-globe"
            style={{ marginTop: "5px", fontSize: "8.48px" }}
          ></i>

          <p
            className=""
            style={{ fontSize: "6.79px", fontWeight: "500", marginTop: "5px" }}
          >
            EN
          </p>

          <button
            className="btn btn-primary"
            type="submit"
            disabled={true}
            style={{
              width: "93.3px",
              height: "23.75px",
              borderRadius: "13.57px",
              fontSize: "6.79px",
              fontWeight: "500",
            }}
          >
            Connect Wallet
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgba(246,246,246,1)",
          width: "855px",
          height: "65px",
        }}
      >
        <section
          className=" pt-4"
          style={{
            paddingLeft: "5rem",
            paddingRight: "5rem",
            borderBottom: "1px solid rgba(217, 217, 217, 1)",
            paddingBottom: "",
            backgroundColor: "rgba(246,246,246,1)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "15px" }}>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "7.92px",
                  textDecoration: "none",
                  color: "rgba(1,1,1,1)",
                }}
              >
                Your Rights
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "7.92px",
                  textDecoration: "none",
                  color: "rgba(1,1,1,1)",
                }}
              >
                Matchmake Me
              </p>
              <div
                style={{
                  display: "inline-block",
                  padding: "5px 10px",
                  border: "1px solid white",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  backgroundColor: "white",
                  transform: "translateY(-5px)",
                }}
              >
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "7.92px",
                    margin: 0,
                    textDecoration: "none",
                  }}
                >
                  Ask AI
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "5px",
                color: "rgba(74, 144,226,1)",
              }}
            >
              <p
                style={{
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "6.79px",
                }}
              >
                Emergency Help line
              </p>
              <i
                className="bi bi-question-circle"
                style={{ fontWeight: "400", fontSize: "6.79px" }}
              ></i>
            </div>
          </div>
        </section>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(246,246,246,1)",
          width: "855px",
          height: "65px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            fontWeight: "400",
            fontSize: "9.35px",
            justifyContent: "center",
            alignItems: "center",
            width: "50%", // Half the size of the outer div
            borderBottom: "1px solid rgba(217, 217, 217, 1)",
            textAlign: "center", // To center the text within this div
          }}
        >
          <p>
            Chat With <strong>TwinGenie</strong> AI
          </p>
          <p>See Profile</p>
        </div>
      </div>

    
      <section
        style={{ 
        width: "855px",
        height: "350.61px",
        paddingTop:"15rem",
          backgroundColor: "rgba(246, 246, 246, 1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        {/* First response - floats to the right */}
        <input
          type="text"
          value="What do you think about publishing a book in the 50s?"
          disabled
          style={{
            width: "80%",
            maxWidth: "600px", 
            textAlign: "right", 
            marginBottom: "10px",
            fontSize: "12px",
            color: "#333",
            backgroundColor: "rgba(241, 241, 241, 1)",
            border: "none",
            outline: "none",
            padding: "10px",
            borderRadius:"49px",
          }}
        />

        {/* Second response - floats to the left */}
        <input
          type="text"
          value="First, it is amazing to put that into consideration and it would be amazing."
          disabled
          style={{
            width: "80%",
            maxWidth: "600px", 
            textAlign: "left", 
            marginBottom: "20px",
            fontSize: "12px",
            color: "#333",
            backgroundColor: "white",
            borderRadius:"49px",
            border: "none",
            outline: "none",
            padding: "10px",
          }}
        />

     
          <div style={{ position: "relative", width: "80%", height: "64px", marginTop:"2rem" }}>
            <img
              src={img4}
              alt="Image"
              style={{
                border: "1px solid rgba(156, 156, 156, 1)",
                borderRadius: "32px",
                padding: "10px",
                position: "absolute",
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)", 
                paddingLeft: "10px",
                paddingRight: "5px",
                height: "40px",
                width: "40px",
              }}
            />
            <textarea
              className="form-control"
              disabled={true}
              placeholder="Type A Message"
              aria-label="Search"
              rows="2"
              
              style={{
                width: "100%",
                borderRadius: "48px",
                height: "64px",
                textAlign: "start",
                fontSize: "16px",
                fontWeight: "400",
                backgroundColor: "rgba(241, 241, 241, 1)",
                paddingTop: "1rem",
                paddingLeft: "70px", 
                paddingRight: "70px",
                resize: "none",
                overflowWrap: "break-word",
              }}
            />
            <p className="">
              <img
                src={img3}
                alt="Image"
                style={{
                  border: "1px solid rgba(74, 144, 226, 1)",
                  borderRadius: "32px",
                  padding: "10px",
                  backgroundColor: "rgba(74, 144, 226, 1)",
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)", // Center vertically in the search box
                  paddingLeft: "10px",
                  paddingRight: "5px",
                  height: "40px",
                  width: "40px",
                }}
              />
            </p>
          </div>
      </section>
    </>
  );
};

export default Desktop;
