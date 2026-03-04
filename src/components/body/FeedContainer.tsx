import { Container, Row} from "react-bootstrap"
import FeedElement from "./feed-element/FeedElement"

function FeedContainer() {
    return (
        <Container fluid>
            <Row>
                <h4>What's new around you:</h4>
                <hr></hr>
                <FeedElement />
                <FeedElement />
                <FeedElement />
            </Row>
        </Container>
    )
}

export default FeedContainer