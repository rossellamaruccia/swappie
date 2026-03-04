import { Button } from "react-bootstrap"
import { VscSettingsGear } from "react-icons/vsc"

function SettingsButton() {
    return (
      <>
        <Button className="btn me-2 settingsButton" href="/settings">
          <VscSettingsGear />
        </Button>
      </>
    )
    
}

export default SettingsButton