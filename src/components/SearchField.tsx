import { Form, Col, Row } from "react-bootstrap"
import { InputGroup } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"

function SearchField() {
    return (
      <>
        <Form as={Row}>
          <Form.Group as={Col} className="mx-0 my-3">
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search"
                className="formCol"
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </>
    )
}
export default SearchField