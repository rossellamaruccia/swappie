import { Form, Col, Button, Row } from "react-bootstrap"
import { BsSearch } from "react-icons/bs"

function SearchField() {
    return (
      <>
        <Form as={Row}>
          <Form.Group as={Col} xs="6" md="4">
            <Form.Select className="formCol">
              <option>Categories</option>
              <option value="1">Work Tools</option>
              <option value="2">Hobbies</option>
              <option value="3">Gardening</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="d-none d-md-block" md="8">
            <Form.Control
              type="search"
              placeholder="Search"
              className="formCol"
            />
          </Form.Group>
          <Form.Group as={Col} className="d-block d-md-none">
            <Button className="searchButton"><BsSearch /></Button>
          </Form.Group>
        </Form>
      </>
    )
}
export default SearchField