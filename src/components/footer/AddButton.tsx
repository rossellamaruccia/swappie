import Button from "react-bootstrap/Button"
import "C:/Users/All-B/Desktop/Epicode/swappie/src/styles/customs.css"

function AddButton() {
  return (
    <>
      <Button as="input" type="button" variant="success" size="lg" active className="round-button">
        +
      </Button>
    </>
  )
}

export default AddButton;