import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  textTransform: "uppercase",
  textDecoration: "none",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "bold",
  color: "white"
};

const Header = () => (
  <header
    style={{ textAlign: "right", backgroundColor: "darkblue", padding: "20px" }}
  >
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/quotes">
      <a style={linkStyle}>Quotes</a>
    </Link>

    {/*<style>
      {`@import url('https://fonts.googleapis.com/css?family=Montserrat:700&display=swap');`}
    </style>

    <style jsx>{`
      header {
        font-family: "Montserrat", sans-serif;
      }
    `}</style>*/}
  </header>
);

export default Header;
