import "../../customs.css"
import LogoButton from "../LogoButton"
import SearchField from "../SearchField"
import AccountButton from "../AccountButton"
import SettingsButton from "../SettingsButton"

function HeaderBar() {
  return (
    <>
      <LogoButton />
      <SearchField />
      <AccountButton />
      <SettingsButton />
    </>
  )
}

export default HeaderBar
