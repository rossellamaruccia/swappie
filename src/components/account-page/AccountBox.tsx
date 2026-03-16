import type { User } from "../../types/user"
import { Row, Col, Button } from "react-bootstrap"

const AccountBox = (props: User) => {
    return (
      <>
        <Row>
          <Col xs="2" className="text-center">
            {props.profilePic == null ? (
              <>
                <div className="dummy-profile-pic"></div>
              </>
            ) : (
              <>
                <img src={props.profilePic} className="profilePic"/>
              </>
            )}
          </Col>
          <Col xs="8">
            <h3>
              {props.name} {props.surname}
            </h3>
            <h5>{props.city}</h5>
            <Button className="btn btn-success p-1">Send me a message</Button>
          </Col>
          <Col>
            <Button type="button" className="btn btn-warning p-1" href="/edit">
              edit profile
            </Button>
            <Button className="btn btn-danger p-1 m-1">Delete profile</Button>
          </Col>
        </Row>
      </>
    )
}

export default AccountBox