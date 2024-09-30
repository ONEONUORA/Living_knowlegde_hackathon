import img4 from "../assets/mic-01.png";
import img3 from "../assets/sent.png";
const TwinHome2 = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(241, 241, 241, 1)",
          paddingBottom: "2rem",
        }}
      >
        <section
          className=" pt-4"
          style={{
            paddingLeft: "5rem",
            paddingRight: "5rem",
            borderBottom: "1px solid rgba(217, 217, 217, 1)",
            paddingBottom: "2rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href=""
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "rgba(1,1,1,1)",
                }}
              >
                Your Rights
              </a>
              <a
                href=""
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "rgba(1,1,1,1)",
                }}
              >
                Matchmake Me
              </a>
              {/* <div
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  border: "1px solid white",
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "30px",
                  backgroundColor: "white",
                  transform: "translateY(-10px)",
                }}
              >
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    margin: 0,
                    textDecoration:"none"
                  }}
                >
                  Ask AI
                </p>
              </div> */}
            </div>

            <div
              style={{
                display: "flex",
                gap: "5px",
                color: "rgba(74, 144,226,1)",
              }}
            >
              <a
                href=""
                style={{
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Emergency Help line
              </a>
              <i
                className="bi bi-question-circle"
                style={{ fontWeight: "400", fontSize: "18px" }}
              ></i>
            </div>
          </div>
        </section>

        <section
          style={{
            width: "1240px",
            height: "682px",
            background: "rgba(238, 238, 238, 1)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column", 
            justifyContent: "space-between",
            alignItems: "center",
            margin: "20px auto",
            padding: "20px", 
          }}
        >
          {/* Upper part for AI response */}
          <div
            style={{
              width: "100%",
              height: "80%", // Reserve 80% of the height for AI response
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              padding: "20px",
              overflowY: "auto", // Allow scrolling if the response is long
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: "400", color: "#333", textAlign:"center" }}>
              {/* AI response will go here */}
             Reponse
            </p>
          </div>

          {/* Bottom part for the search bar */}
          <div style={{ position: "relative", width: "800px", height: "64px" }}>
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
              placeholder="Ask me anything..."
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
            <button className="btn">
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
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default TwinHome2;
