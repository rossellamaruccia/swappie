import { Image } from "react-bootstrap"
import "../../customs.css"

function LogoButton() {
  function handleClick() { 
    localStorage.setItem("category", "")
  }
  return (
    <>
        <a href="/" onClick={handleClick}>
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
