import AccountButton from "../../AccountButton"
import { Row, Col } from "react-bootstrap"

function UserThumbnail() {
  return (
    <>
      <Row>
        <Col>
          <AccountButton />
          <p>user name</p>
          <p>user position</p>
        </Col>
      </Row>
    </>
  )
}

export default UserThumbnail
