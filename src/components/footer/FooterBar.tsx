import "../../customs.css"
import { Container, Row, Col } from "react-bootstrap"
import { FaGooglePlay } from "react-icons/fa"
import { FaApple } from "react-icons/fa"
import CustomLink from "./CustomLink"
import LogoButton from "../header/LogoButton"

function FooterBar() {
  return (
    <>
      <Container fluid className="mb-2">
        <hr></hr>
        <Row className="align-items-center">
          <Col>
            <CustomLink title={{ title: "Chi siamo" }} />
            <CustomLink title={{ title: "Da dove veniamo" }} />
            <CustomLink title={{ title: "Due fiorini" }} />
          </Col>
          <Col>
            <CustomLink title={{ title: "Chi siamo" }} />
            <CustomLink title={{ title: "Da dove veniamo" }} />
            <CustomLink title={{ title: "Due fiorini" }} />
          </Col>
          <Col>
            <CustomLink title={{ title: "Chi siamo" }} />
            <CustomLink title={{ title: "Da dove veniamo" }} />
            <CustomLink title={{ title: "Due fiorini" }} />
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col>
            <LogoButton />
          </Col>
          <Col className="buttonsCol">
            <p>Download our app: </p>
            <FaGooglePlay className="mx-2" />
            <FaApple />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FooterBar
