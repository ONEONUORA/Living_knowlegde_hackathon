import img4 from "../assets/mic-01.png";
// import img3 from "../assets/sent.png";
import { useState } from "react";
const TwinHome2 = () => {
  const [userInput, setUserInput] = useState('');
  const [conversationHistory, setConversationHistory] = useState([
    { role: "assistant", content: "Hello! I'm Elun Gates, your hybrid AI assistant ready to give distribution advice." }
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUserMessage = { role: "user", content: userInput };
    const newConversationHistory = [...conversationHistory, newUserMessage];
    setConversationHistory(newConversationHistory);

    try {
      const body = {
        messages: [
          { role: "system", content: "." },
          ...newConversationHistory
        ]
      };

      const res = await fetch('https://phi.us.gaianet.network/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const aiMessage = data.choices[0].message.content;

      const newAIMessage = { role: "Financial Advisor", content: aiMessage };
      setConversationHistory([...newConversationHistory, newAIMessage]);
      setUserInput('');
    } catch (error) {
      console.error('Error fetching data:', error);
      const errorMessage = { role: "system", content: 'Error fetching data. Please try again later.' };
      setConversationHistory([...newConversationHistory, errorMessage]);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(241, 241, 241, 1)",
          paddingBottom: "2rem",
          minHeight:"100vh"
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

        <section style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "2rem" }}>
        <p style={{ color: "rgba(156, 156, 156, 1)", fontWeight: "400", fontSize: "12px" }}>AI can make mistakes. Check for important information.</p>

        <div style={{ position: "relative", width: "800px" }}>
          <img src={img4} alt="Ask" style={{ borderRadius: "32px", padding: "10px", position: "absolute", left: "15px", top: "5%", height: "40px", width: "40px" }} />
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
            <textarea
          
              className="form-control"
              placeholder="Ask me anything..."
              aria-label="Search"
            value={userInput}
             onChange={(e) => setUserInput(e.target.value)}

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
            <button
              type="submit"
              style={{ width: "200px", height: "50px", border: "none", borderRadius: "16px", backgroundColor: "blue", color: "white" }}
            >
              Ask
            </button>
          </form>
          <div style={{ marginTop: "20px", maxHeight: "300px", overflowY: "auto", border: "1px solid rgba(217, 217, 217, 1)", borderRadius: "16px", padding: "10px", backgroundColor: "white" }}>
            {conversationHistory.map((message, index) => (
              <div key={index} style={{ marginBottom: "10px", textAlign: message.role === "user" ? "right" : "left" }}>
                <strong style={{ color: message.role === "user" ? "blue" : "green" }}>{message.role === "user" ? "You:" : "Elun Gates:"}</strong>
                <p style={{ display: "inline-block", padding: "5px", borderRadius: "12px", backgroundColor: message.role === "user" ? "rgba(230, 230, 255, 1)" : "rgba(210, 255, 210, 1)" }}>
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default TwinHome2;

