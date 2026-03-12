import { Button } from "react-bootstrap"
import { VscAccount } from "react-icons/vsc"

function AccountButton() {
  return (
    <>
      <Button className="settingsButton" href="/account" >
        <VscAccount />
      </Button>
    </>
  )
}

export default AccountButton
