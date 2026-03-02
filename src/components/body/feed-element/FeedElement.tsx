import { Col, Row } from "react-bootstrap";

function FeedElement() {
    return (
        <>
            <Row>
                <Col>
                    <h1>Image</h1>
                </Col>
                <Col>
                    <Row><h1>Title</h1></Row>
                    <Row><h1>Description</h1></Row>
                </Col>
            </Row>
        </>
    )
}

export default FeedElement