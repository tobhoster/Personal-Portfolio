"use client";

import { headerStyle, paragraphStyle } from "../style";

export default function About() {
  return (
    <main
      style={{
        width: "60%",
      }}
    >
      <h2 style={headerStyle}>About Me</h2>
      <p style={paragraphStyle}>
        I'm a Software Engineer with over 5 years of experience in all stages of
        software development. I hold a Bachelor's and a Master's degree in
        Computer Science. I'm highly adaptable to new technologies and
        languages, and proficient in Java, C++, Typescript, Python, Ruby,
        Golang, and Rust. My passion lies in building robust and scalable
        solutions.
      </p>

      <h2 style={headerStyle}>Work Experience</h2>

      <h2 style={headerStyle}>Education</h2>
    </main>
  );
}
