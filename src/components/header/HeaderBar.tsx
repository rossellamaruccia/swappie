import "../../customs.css"
import LogoButton from "../LogoButton"
import SearchField from "../SearchField"
import AccountButton from "../AccountButton"
import SettingsButton from "../SettingsButton"
import { Container } from "react-bootstrap"

function HeaderBar() {
  return (
    <Container className="navbar">
            <LogoButton />
            <SearchField />
            <AccountButton />
            <SettingsButton />
    </Container>
  )
}

export default HeaderBar
