import { Component } from "react"
import { getUserInfo } from "../../../api/userApi"
import AccountButton from "../../header/AccountButton"
import { Row, Col } from "react-bootstrap"
import type { UserResponse } from "../../../types/user"

type MyProps = {
  user_id: string
}
type MyState = {
  name: string
  surname: string
  city: string
}

class UserThumbnail extends Component<MyProps, MyState> {
  state : MyState = {
    name: "",
    surname: "",
    city: ""
  }
  
  async componentDidMount() {
    try{
      const data: UserResponse = await getUserInfo(this.props.user_id)
      this.setState({
        ...this.state,
        name: data.name,
        surname: data.surname,
        city: data.city
      })
    }
    catch{
      throw new Error
    }
  }
  
  render(){
    return (
      <>
        <Row>
          <Col>
            <AccountButton />
            <p>{this.state.name} {this.state.surname}</p>
            <p>{this.state.city}</p>
          </Col>
        </Row>
      </>
    )
  }
}

export default UserThumbnail
