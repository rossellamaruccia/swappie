import "../../customs.css"
import LogoButton from "../LogoButton"
import SearchField from "../SearchField"
import SettingsButton from "../SettingsButton"
import { Container, Row, Col, Navbar } from "react-bootstrap"
import SubscribeButton from "./SubscribeButton"
import AddButton from "./AddButton"
import HelpButton from "./HelpButton"
import CategoryButton from "../footer/CategoryButton"

function HeaderBar() {
  return (
    <Navbar expand="md">
      <Container fluid className="nav navbar">
        <Row className="align-items-center w-100">
          <Col xs="10" md="2">
            <LogoButton />
          </Col>
          <Col xs="2" className="col-md-4 align-middle" md={{ order: 2 }}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Col className="buttonsCol">
                <SubscribeButton />
                <AddButton />
                <SettingsButton />
                <HelpButton />
              </Col>
            </Navbar.Collapse>
          </Col>

          <Col xs="12" md="6">
            <SearchField />
          </Col>
          <Col xs="12" md={{ order: 3}}>
            <CategoryButton title={{ title: "work tools" }} />
            <CategoryButton title={{ title: "house maintenance diy" }} />
            <CategoryButton title={{ title: "gardening" }} />
            <CategoryButton title={{ title: "music stuff" }} />
            <CategoryButton title={{ title: "party materials" }} />
            <CategoryButton title={{ title: "cooking tools" }} />
            <CategoryButton title={{ title: "crafting" }} />
            <CategoryButton title={{ title: "woodworking" }} />
            <CategoryButton title={{ title: "painting" }} />
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default HeaderBar
