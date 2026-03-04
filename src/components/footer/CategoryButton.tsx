import { Col, Button } from "react-bootstrap"
import "../../customs.css"

type Props = {
  title: { title: string }
}

function CategoryButton({ title }: Props) {
  return (
    <>
      <Col>
        <Button>{title.title}</Button>
      </Col>
    </>
  )
}

export default CategoryButton
