import { Component } from "react"
//import { getUserInfo } from "../../../api/userApi"
import AccountButton from "../../header/AccountButton"
import { Row, Col } from "react-bootstrap"
import type { UserResponse } from "../../../types/user"

type MyProps = {
  user: UserResponse | null
}
type MyState = {
  name: string | undefined
  surname: string | undefined
  city: string | undefined
}

class UserThumbnail extends Component<MyProps, MyState> {
  state : MyState = {
    name: this.props.user?.name,
    surname: this.props.user?.surname,
    city: this.props.user?.city
  }
  
  // async componentDidMount() {
  //   try{
  //     const data: UserResponse = await getUserInfo(this.props.user)
  //     this.setState({
  //       ...this.state,
  //       name: data.name,
  //       surname: data.surname,
  //       city: data.city
  //     })
  //   }
  //   catch{
  //     throw new Error
  //   }
  // }
  
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
