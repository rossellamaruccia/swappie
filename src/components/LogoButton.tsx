import Image from "react-bootstrap/Image"
import "../customs.css"

function LogoButton() {
  return (
    <Image
      src="src\assets\swappie.svg"
      fluid
      className="navbar.brand d-inline-block align-top mx-3 logo-small"
    />
  )
}

export default LogoButton
