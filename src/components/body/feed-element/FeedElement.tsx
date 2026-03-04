import { Col, Row, Carousel, Image } from "react-bootstrap";

import UserThumbnail from "./UserThumbnail";

function FeedElement() {
    return (
      <>
        <Row className="mt-2">
          <Col sm="3">
            <Carousel>
              <Carousel.Item>
                <Image src="https://placecats.com/300/200" />
              </Carousel.Item>
              <Carousel.Item>
                <Image src="https://placecats.com/300/200" />
              </Carousel.Item>
              <Carousel.Item>
                <Image src="https://placecats.com/300/200" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm="7">
            <h3>Title</h3>
            <p>Description</p>
          </Col>
          <Col sm="2">
            <UserThumbnail />
          </Col>
        </Row>
      </>
    )
}

export default FeedElement