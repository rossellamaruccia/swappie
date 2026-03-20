import { Image } from "react-bootstrap"
import "../../customs.css"

function LogoButton() {
  return (
    <>
        <a href="/">
          <Image
            src="src\assets\swappie.svg"
            fluid
            className="navbar.brand d-inline-block align-top logo-small"
          />
        </a>
    </>
  )
}

export default LogoButton
