import { Component } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { newUser } from "../../api/userApi";

class SubscribeForm extends Component {
  state = {
    user: {
      name: "",
      surname: "",
      email: "",
      password: "",
      city: "",
    },
    response: {
      value: false
    }
  }

  handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault()
    try {
      await newUser(this.state.user)
      this.setState({
        user: {
        ...this.state.user
        },
        response: {
        value: true
      }})
    } catch (error) {
      return "Something went wrong: " + error
    }
  }

  render() {
    return (
      <Container className="hero py-5">
        <Form className="customForm" onSubmit={this.handleSubmit}>
          <h4>Become a swapper!</h4>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
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
              placeholder="Enter your surname"
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
              placeholder="Enter email"
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.user.password}
              onChange={(e) => {
                this.setState({
                  user: {
                    ...this.state.user,
                    password: e.target.value,
                  },
                })
              }}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Allow your geolocation</Form.Label>
            <Form.Control
              type="check"
              placeholder=" I allow to give you my position"
              onChange={() => {
                this.setState({
                  user: {
                    ...this.state.user,
                    //todo: geolocation function
                  },
                })
              }}
            />
          </Form.Group>
          <Button
            className="btn btn-success px-2 py-1 mb-2"
            type="submit"
            onSubmit={this.handleSubmit}
          >
            Subscribe
          </Button>
          <br></br>
          <span>Already subscribed? </span>
          <a href="/login">Login</a>
        {this.state.response.value && <Alert className="success w-75 mt-2"> You're in! Check your confirmation email and start exploring Swappie. </Alert>}
        </Form>
      </Container>
    )
  }
}

export default SubscribeForm