import { Col, Row} from "react-bootstrap"

interface Props {
  pics: string[] | null
  title: string
  description: string
  user_name: string
  user_surname: string
  user_city: string
}
function ItemElement(props: Props) {
  return (
    <>
      <Row className="mt-2">
        <Col>
          <img src={props.pics?.[0]} className="item_img_preview" />
        </Col>
        <Col>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </Col>
        <Col>
          <p>
            {props.user_name} {props.user_surname}
          </p>
          <p>{props.user_city}</p>
        </Col>
      </Row>
    </>
  )
}

export default ItemElement
