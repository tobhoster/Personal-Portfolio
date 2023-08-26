"use client";
import GradientText from "@/components/GradientText";

export default function Contact() {
  const textStyle = {
    color: "var(--colors-heading, #1E0E62)",
    textAlign: "center",
    fontSize: "3rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "4.4rem",
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <div>
        <h2 style={textStyle}>For any questions please mail me:</h2>
        <p style={textStyle}>
          <GradientText>oeadebiyi@hotmail.com</GradientText>
        </p>
      </div>
    </main>
  );
}
