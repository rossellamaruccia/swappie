import { Form, Row, Col } from "react-bootstrap"

function SearchField() {
    return (
        <>
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
        </Row>
      </Form>
        </>
    )
}
export default SearchField