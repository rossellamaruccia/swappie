import "../../customs.css"
import LogoButton from "../LogoButton"
import SearchField from "../SearchField"
import AccountButton from "../AccountButton"
import SettingsButton from "../SettingsButton"
import { Container, Row, Col } from "react-bootstrap"

function HeaderBar() {
  return (
    <Container fluid className="navbar">
      <Row className="align-items-center">
        <Col xs="2">
          <LogoButton />
        </Col>
        <Col xs="8">
          <SearchField />
        </Col>
        <Col xs="2" className="buttonsCol">
          <AccountButton />
          <SettingsButton />
        </Col>
      </Row>
    </Container>
  )
}

export default HeaderBar
