import { useState } from "react";
import "./index.css";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  // Inline styles for the glass card to keep it self-contained
  const cardStyle = {
    background: "rgba(30, 41, 59, 0.4)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    padding: "3rem",
    maxWidth: "480px",
    width: "90%",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    textAlign: "center" as const,
    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
    transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "1rem",
    background: "linear-gradient(135deg, #fff 0%, #94a3b8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.02em",
  };

  const textStyle = {
    color: "#94a3b8",
    fontSize: "1.125rem",
    lineHeight: 1.6,
    marginBottom: "2.5rem",
    fontWeight: 400,
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
    color: "#fff",
    padding: "1rem 2.5rem",
    borderRadius: "12px",
    fontSize: "1rem",
    fontWeight: 600,
    boxShadow: "0 4px 6px -1px rgba(56, 189, 248, 0.3)",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    transform: "scale(1)",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          background: "linear-gradient(135deg, #38bdf8 20%, #818cf8 100%)",
          borderRadius: "16px",
          margin: "0 auto 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          boxShadow: "0 10px 15px -3px rgba(56, 189, 248, 0.3)",
        }}
      >
        ✨
      </div>

      <h1 style={titleStyle}>Future Ready</h1>

      <p style={textStyle}>
        Experience the next generation of web interfaces. Built with precision,
        designed for impact. Your journey begins here.
      </p>

      <button
        style={buttonStyle}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 10px 15px -3px rgba(56, 189, 248, 0.5)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 4px 6px -1px rgba(56, 189, 248, 0.3)";
        }}
        onClick={() => alert("Welcome aboard!")}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
