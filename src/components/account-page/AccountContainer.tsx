import { Component } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { getUserInfo } from "../../api/userApi"
import type { UserResponse } from "../../types/user"
import type { UserState } from "../../types/user"

class AccountContainer extends Component {

  authToken = localStorage.getItem("accessToken")

  state : UserState = {
    user: {
      id: "",
      name: "",
      surname: "",
      email: "",
      city: "",
      image: "",
      items: [],
    },
    isLoading: true,
    error: null
  }

    async componentDidMount() {
        try {
          const data: UserResponse = await getUserInfo(this.authToken)
          this.setState({ user: data, isLoading: false })
        } catch (error) {
          this.setState({ error: true, isLoading: false })
          console.log("Something went wrong" + error)
        }
  }

  render() {
    const { user, isLoading, error } = this.state
    //loading profile
    if (isLoading) return <div>Loading user profile...</div>
    //error
    else if (error) return <div>Error: {error}</div>
    else return (
      <>
        <Container fluid>
          <Row>
            <Col xs="3">
              <img src={this.state.user.image} />
            </Col>
            <Col xs="7">
              <h3>{this.state.user.name}</h3>
              <h5>{this.state.user.city}</h5>
            </Col>
            <Col>
              <Button className="btn" href="/editProfile">
                edit profile
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default AccountContainer
