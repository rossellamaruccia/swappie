import "../../customs.css"
import { Container, Row, Col } from "react-bootstrap"
import { FaGooglePlay } from "react-icons/fa"
import { FaApple } from "react-icons/fa"
import CustomLink from "./CustomLink"

function FooterBar() {
  return (
    <>
      <Container fluid className="mb-2">
        <hr></hr>
        <Row className="align-items-center">
          <CustomLink title={{ title: "categories" }} />
          <CustomLink title={{ title: "categories" }} />
          <CustomLink title={{ title: "categories" }} />
        </Row>
        <hr></hr>
        <Row>
          <Col>
            <p>Download our app: </p>
              <FaGooglePlay className="mx-2"/>
              <FaApple />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FooterBar
