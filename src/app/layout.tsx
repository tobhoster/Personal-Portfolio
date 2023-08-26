import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tobhoster",
  description: "Hi 👋🏿, My name is Oluwatobi Adebiyi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{
        padding: "2rem 5rem",
      }}
    >
      {/* Body */}
      <body className={poppins.className}>
        {/* Navigation */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            src={"/logo.svg"}
            width={240}
            height={50}
            alt="Picture of the author"
          />

          <Nav />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Image
              src={"/github.svg"}
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src={"/twitter.svg"}
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src={"/linkedin.svg"}
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div>
        </div>
        {/* Children */}
        {children}
              {/* Footer */}
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            src={"/logo.svg"}
            width={150}
            height={30}
            alt="Picture of the author"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Image
              src={"/github.svg"}
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src={"/twitter.svg"}
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src={"/linkedin.svg"}
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div>
        </div>
        <hr
          style={{
            color: "gray",
            backgroundColor: "gray",
            height: 0.1,
            margin: "3rem 0",
          }}
        />
        {/* Nav */}
        <div>
          <Nav bottom={true} />
        </div>
      </div>
      </body>
    </html>
  );
}

function Nav({ bottom = false }) {
  const linkStyle = {
    textDecoration: "none",
    color: "#666",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "1.6rem",
  };

  return (
    <ol
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: bottom ? "left" : "space-between",
        padding: "0",
        listStyle: "none",
        gap: "2rem",
      }}
    >
      <li>
        <Link href={"/"} style={linkStyle}>
          Home
        </Link>
      </li>
      <li>
        <Link href={"/about"} style={linkStyle}>
          About
        </Link>
      </li>
      <li>
        <Link href={"/tech_stack"} style={linkStyle}>
          Tech Stack
        </Link>
      </li>
      <li>
        <Link href={"/blog"} style={linkStyle}>
          Blog
        </Link>
      </li>
      <li>
        <Link href={"/contact"} style={linkStyle}>
          Contact
        </Link>
      </li>
    </ol>
  );
}
