const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "200px",
        }}
      >
        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
          style={{
            zIndex: 1,
            position: "relative",
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{
              backgroundColor: "black", // Background color to ensure visibility
              padding: "10px",
              borderRadius: "50%",
            }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Carousel Slides */}
        <div
          className="carousel-inner"
          style={{
            flex: 1, // Ensure the slides take up space between the buttons
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 5px", // Space between slides and buttons
          }}
        >
          {/* First Slide */}
          <div className="carousel-item active">
            <div
              className=" w-100"
              style={{
                height: "50px",
                display: "flex", // Center content in each slide
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "rgba(238, 238, 238, 1)",
                }}
              >
                Co-create with your digital twin{" "}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div
              className=" w-100"
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "rgba(238, 238, 238, 1)",
                }}
              >
                Real-time AI insights at work{" "}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <div
              className=" w-100"
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "rgba(238, 238, 238, 1)",
                }}
              >
                Shape the future with AI{" "}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>

          {/* Fourth Slide */}

          <div className="carousel-item">
            <div
              className=" w-100"
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "rgba(238, 238, 238, 1)",
                }}
              >
                Fair revenue sharing via smart contracts{" "}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>

          {/* Fifth Slide */}

          <div className="carousel-item">
            <div
              className=" w-100"
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "rgba(238, 238, 238, 1)",
                }}
              >
                Collaborate with evolving AI{" "}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>

          {/* Sixth Slide */}

          <div className="carousel-item">
            <div
              className=" w-100"
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "rgba(238, 238, 238, 1)",
                }}
              >
                Engage in dynamic AI interactions{" "}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>

          {/* Seven Slide */}

          <div className="carousel-item">
            <div
              className=" w-100"
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "rgba(238, 238, 238, 1)",
                }}
              >
                AI-powered creativity unleashed{" "}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>

          {/*Eight Slide */}

          <div className="carousel-item">
            <div
              className=" w-100"
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "rgba(238, 238, 238, 1)",
                }}
              >
                Join the AI-driven revolution{" "}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>

          {/*Nine Slide */}

          <div className="carousel-item">
            <div
              className=" w-100"
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "rgba(238, 238, 238, 1)",
                }}
              >
                Unlock digital co-creation{" "}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>

          {/*Tenth Slide */}

          <div className="carousel-item">
            <div
              className=" w-100"
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "rgba(238, 238, 238, 1)",
                }}
              >
                Amplify your vision with AI{" "}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
          style={{
            zIndex: 1,
            position: "relative",
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{
              backgroundColor: "black", // Background color to ensure visibility
              padding: "10px",
              borderRadius: "50%",
            }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
