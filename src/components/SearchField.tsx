import { Form, Col, Button, Row } from "react-bootstrap"
import { BsSearch } from "react-icons/bs"

function SearchField() {
    return (
      <>
        <Form as={Row}>
          <Form.Group as={Col}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="searchField"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Button type="button" className="searchButton">
              <BsSearch />
            </Button>
          </Form.Group>
        </Form>
      </>
    )
}
export default SearchField