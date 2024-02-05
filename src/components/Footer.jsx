import React from "react";
import {
  Container,
  Link,
  Row,
  Col,
  Footer,
  H4,
  SocialLink,
} from "../assets/Footer.styles";
function App() {
  return (
    <Footer>
      <Container>
        <Row>
          <Col>
          <Link style={{ pointerEvents: "none" }}>
                  Improve healthcare through blockchain technology. By combining
                  the power of blockchain and healthcare, we aim to create a
                  global, secure, transparent and fair healthcare system.
                </Link>
          </Col>
          <Col>
            <H4>company</H4>
            <ul>
              <li>
                <Link href="">about us</Link>
              </li>
              <li>
                <Link href="">our services</Link>
              </li>
              <li>
                <Link href="">privacy policy</Link>
              </li>
              <li>
                <Link href="">Blockchain</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <H4>Contact</H4>
            <ul>
              <li>
                <Link href="">0358365493</Link>
              </li>
              <li>
                <Link href="">Ha Noi-Viet Nam</Link>
              </li>
              <li>
                <Link href="">DaiNam University</Link>
              </li>
              <li>
                <Link href="">haotrinh142@gmail.com</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <H4>follow us</H4>
            <SocialLink>
              <Link href="https://www.facebook.com/trinhhao142.hayyier">
                <i className="fab fa-facebook-f"></i>
              </Link>

              <Link href="">
                <i className="fab fa-twitter"></i>
              </Link>

              <Link href="">
                <i className="fa-brands fa-github"></i>
              </Link>

              <Link href="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </SocialLink>
          </Col>
        </Row>
      </Container>
      <h1 className="text-white text-center mt-4">
        Built by Trinh Van Hao-haotrinh142@gmail.com
      </h1>
    </Footer>
  );
}

export default App;
