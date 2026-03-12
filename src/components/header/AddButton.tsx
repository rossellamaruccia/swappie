import { Button } from "react-bootstrap"
import { IoIosAddCircleOutline } from "react-icons/io"

function AddButton() {
  return (
    <>
      <Button className="btn settingsButton" href="/add">
        <IoIosAddCircleOutline />
      </Button>
    </>
  )
}

export default AddButton
