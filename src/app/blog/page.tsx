"use client";

import { headerStyle, paragraphStyle } from "../style";

export default function Blog() {
  return (
    <main>
      <h2 style={headerStyle}>Blog</h2>
      <p style={paragraphStyle}>
        Here, I share my thoughts and experiences on a wide range of topics
        related to technology, programming, and more.
      </p>
    </main>
  );
}
