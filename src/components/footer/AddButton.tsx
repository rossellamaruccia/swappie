import { Col, Button } from "react-bootstrap"
import "../../customs.css"

function AddButton() {
  return (
    <>
      <Col>
        <Button
          as="input"
          type="button"
          variant="success"
          size="lg"
          active
          className="round-button"
        >
          +
        </Button>
      </Col>
    </>
  )
}

export default AddButton;