import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#183848",
        color: "#fff",
        padding: "50px 0 20px",
        marginTop: "60px",
      }}
    >
      <Container>
        <hr style={{ borderColor: "#ffffff30" }} />

        <p
          style={{
            textAlign: "center",
            marginBottom: 0,
            color: "#ddd",
          }}
        >
          Copyright © 2026 Kieferorthopädie Dr. Shadi Loutfi
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
