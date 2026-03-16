import { Component } from "react"
import { Container, Form, Button } from "react-bootstrap"
import type { UserResponse } from "../../types/user"
import { modifyUser, getUserInfo, checkToken } from "../../api/userApi"
import { Navigate } from "react-router-dom"

interface FormState {
  user: UserResponse
  loading: false
  error: string | null
}

class EditForm extends Component {
  state: FormState = {
    user: {
      id: "",
      name: "",
      surname: "",
      email: "",
      profilePic: null,
      city: "",
    },
    loading: false,
    error: null,
  }

  activeUser = checkToken()
  authToken = localStorage.getItem("accessToken")

  async componentDidMount() {
    try {
      const userData: UserResponse = await getUserInfo(this.authToken)
      this.setState({
        ...this.state,
        user: userData,
      })
    } catch {
      this.setState({
        ...this.state,
        error: "Could not get user information",
      })
      throw new Error()
    }
  }

  handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault()
    try {
      modifyUser(this.authToken, this.state.user)
      console.log("done")
      return <Navigate to="/account" replace />
    } catch (error) {
      return "Something went wrong: " + error
    }
  }

  render() {
    return (
      <Container className="hero py-5">
        <Form className="customForm" onSubmit={this.handleSubmit}>
          <h4>Edit your profile</h4>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={this.state.user.name}
              value={this.state.user.name}
              onChange={(e) => {
                this.setState({
                  user: {
                    ...this.state.user,
                    name: e.target.value,
                  },
                })
              }}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder={this.state.user.surname}
              value={this.state.user.surname}
              onChange={(e) => {
                this.setState({
                  user: {
                    ...this.state.user,
                    surname: e.target.value,
                  },
                })
              }}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder={this.state.user.email}
              value={this.state.user.email}
              onChange={(e) => {
                this.setState({
                  user: {
                    ...this.state.user,
                    email: e.target.value,
                  },
                })
              }}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Insert your city</Form.Label>
            <Form.Control
              type="text"
              placeholder={this.state.user.city}
              value={this.state.user.city}
              onChange={(e) => {
                this.setState({
                  user: {
                    ...this.state.user,
                    city: e.target.value,
                  },
                })
              }}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload a profile picture</Form.Label>
            <Form.Control
              type="file"
              isInvalid={!!this.state.error}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files) {
                  const file = e.target.files[0]
                  this.setState({
                    error: null,
                    user: {
                      ...this.state.user,
                      profilePic: file,
                    },
                  })
                }
              }}
            />
          </Form.Group>
          <Button
            className="btn btn-success px-2 py-1 mb-2"
            type="submit"
            onSubmit={this.handleSubmit}
          >
            Edit profile
          </Button>
        </Form>
      </Container>
    )
  }
}

export default EditForm
