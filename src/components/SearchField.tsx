import { Form, Row, Col, Button } from "react-bootstrap"

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
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
        </>
    )
}
export default SearchField