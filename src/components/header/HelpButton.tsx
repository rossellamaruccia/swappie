import { Button } from "react-bootstrap";
import { RxQuestionMarkCircled } from "react-icons/rx"

function HelpButton() {
    return (
      <>
        <Button className="settingsButton" href="/help">
          <RxQuestionMarkCircled />
        </Button>
      </>
    )
}

export default HelpButton