import { Row, Image } from "react-bootstrap"
import "../customs.css"

function LogoButton() {
  return (
    <>
      <Row>
        <Image
          src="src\assets\swappie.svg"
          fluid
          className="navbar.brand d-inline-block align-top logo-small"
        />
      </Row>
    </>
  )
}

export default LogoButton
