import { Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io"

function AddButton() {
    return (
        <>
        <Button className="btn btn-outline-success bg-transparent ms-2 me-3 pb-2 fw-bolder subscribeButton" href="/member/add">
                    <IoMdAdd />
            </Button>
        </>
    )
}

export default AddButton