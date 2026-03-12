import { Col, Row, Carousel, Image } from "react-bootstrap"
import type { Item } from "../../../types/user"
import UserThumbnail from "./UserThumbnail"

function ItemElement(props: Item) {
  return (
    <>
      <Row className="mt-2">
        <Col sm="3">
          <Carousel>
            {props.pics.map((pic) => (
              <Carousel.Item>
                <Image src={pic} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col sm="7">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </Col>
        <Col sm="2">
          <UserThumbnail user_id={props.user} />
        </Col>
      </Row>
    </>
  )
}

export default ItemElement
