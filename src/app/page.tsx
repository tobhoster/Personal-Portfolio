"use client";
import GradientText from "@/components/GradientText";
import Image from "next/image";

const headerStyle = {
  color: "var(--solid-heading, #42446E)",
  fontSize: "3rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "5rem",
};

const paragraphStyles = {
  color: "var(--solid-heading, #42446E)",
  fontSize: "1.75rem",
  fontStyle: "normal",
  fontWeight: 400,
};

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "4rem auto",
      }}
    >
      <div
        style={{
          flexBasis: "55%",
          lineHeight: "3rem",
        }}
      >
        <h2 style={headerStyle}>
          Hi 👋🏿, My name is <GradientText>Oluwatobi Adebiyi</GradientText>
        </h2>
        <p style={paragraphStyles}>
          My passion lies in <GradientText>planning</GradientText>,{" "}
          <GradientText>coding</GradientText>, and{" "}
          <GradientText>testing</GradientText> state-of-the-art software that
          pushes the boundaries of what's possible. <br /> I am based in{" "}
          <GradientText>New York</GradientText>. <br /> Let's build something
          amazing together!
        </p>
      </div>
      <div>
        <Image
          src="/profile.png"
          alt="Picture of the author"
          width={350}
          height={350}
        />
      </div>
    </main>
  );
}
