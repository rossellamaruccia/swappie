import "../../customs.css"
import LogoButton from "../LogoButton"
import SearchField from "../SearchField"
import AccountButton from "../AccountButton"
import SettingsButton from "../SettingsButton"
import { Container, Row, Col } from "react-bootstrap"

function HeaderBar() {
  return (
    <>
<Container fluid>
          <Row>
            <Col xs={3} className="margin-setter">
              <LogoButton />
            </Col>
            <Col xs={5} className="margin-setter">
              <SearchField />
            </Col>
            <Col xs={2} className="margin-setter">
              <AccountButton />
            </Col>
            <Col xs={2} className="margin-setter">
              <SettingsButton />
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default HeaderBar
