import { Component } from "react"
import { Container, Row, Col, Alert } from "react-bootstrap"
import { checkToken, getUserInfo } from "../../api/userApi"
import type { UserResponse } from "../../types/user"
import type { UserState } from "../../types/user"
import type { Item } from "../../types/user"
import ItemElement from "../body/feed-element/ItemElement"
import { getItemsPerUser } from "../../api/itemApi"
import AccountBox from "./AccountBox"
import LoginForm from "./LoginForm"

class AccountContainer extends Component {
  activeUser = checkToken()
  authToken = localStorage.getItem("accessToken")

  state: UserState = {
    user: {
      id: "",
      name: "",
      surname: "",
      email: "",
      city: "",
      profilePic: "",
      items: [],
    },
    isLoading: true,
    error: null,
  }

  async componentDidMount() {
    try {
      const user: UserResponse = await getUserInfo(this.authToken)
      const items: Item[] = await getItemsPerUser(this.authToken, user.id)
      this.setState({
        user: {
          id: user.id,
          name: user.name,
          surname: user.surname,
          email: user.email,
          city: user.city,
          profilePic: user.profilePic,
          items: items,
        },
        isLoading: false,
      })
    } catch (error) {
      this.setState({ error: true, isLoading: false })
      console.log(error)
    }
  }

  render() {
    const { user, isLoading, error } = this.state
    //loading profile
    if (isLoading) return <div>Loading user profile...</div>
    //error
    else if (error)
      return (
        <>
          <Alert className="w-100 text-center">
            Logged out. Please log in again
          </Alert>
          <LoginForm />
        </>
      )
    else if (user)
      return (
        <>
          <Container fluid className="justify-content-center">
            <AccountBox
              id={this.state.user.id}
              name={this.state.user.name}
              surname={this.state.user.surname}
              email={this.state.user.email}
              city={this.state.user.city}
              profilePic={this.state.user.profilePic}
              items={this.state.user.items}
            />
            <Row>
              <h3>Your items</h3>
              {user.items.map((item) => (
                <Col>
                  <ItemElement
                    title={item.title}
                    description={item.description}
                    pics={item.pics}
                    user_name={this.state.user.name}
                    user_surname={this.state.user.surname}
                    user_city={this.state.user.city}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )
  }
}

export default AccountContainer
