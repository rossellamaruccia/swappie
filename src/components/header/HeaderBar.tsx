import "../../customs.css"
import LogoButton from "./LogoButton"
import SearchField from "./SearchField"
import SettingsButton from "./SettingsButton"
import { Container, Row, Col, Navbar } from "react-bootstrap"
import AddButton from "./AddButton"
import HelpButton from "./HelpButton"
import CategoryButton from "../footer/CategoryButton"
import AccountButton from "./AccountButton"
import { Category } from "../../types/types"

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
                <AccountButton />
                <AddButton />
                <SettingsButton />
                <HelpButton />
              </Col>
            </Navbar.Collapse>
          </Col>

          <Col xs="3" md="6">
            <SearchField />
          </Col>
          <Col xs="9" md={{ order: 3 }}>
            <CategoryButton title={{ title: Category.WORK_TOOLS }} />
            <CategoryButton title={{ title: Category.HOUSE_MAINTENANCE }} />
            <CategoryButton title={{ title: Category.DIY }} />
            <CategoryButton title={{ title: Category.GARDENING }} />
            <CategoryButton title={{ title: Category.MUSIC_STUFF }} />
            <CategoryButton title={{ title: Category.PARTY_MATERIAL }} />
            <CategoryButton title={{ title: Category.COOKING_TOOLS }} />
            <CategoryButton title={{ title: Category.CRAFTING }} />
            <CategoryButton title={{ title: Category.WOODWORKING }} />
            <CategoryButton title={{ title: Category.PAINTING }} />
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default HeaderBar
