import { Container, Form, Button } from "react-bootstrap"
import { Component } from "react"

class LoginForm extends Component {
  state = {
    formValue: {
      email: "",
      password: "",
    },
  }

  render() {
    return (
      <Container className="hero py-5">
        <Form className="customForm">
          <h4>login</h4>
          <Form.Group className="mb-2">
            <Form.Control
              type="email"
              placeholder="Email address"
              value={this.state.formValue.email}
              onChange={(e) => {
                this.setState({
                  ...this.state.formValue,
                  email: e.target.value,
                })
              }}
            />
            <Form.Label>insert the email address you use on Swappie</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.formValue.password}
              onChange={(e) => {
                this.setState({
                  ...this.state.formValue,
                  password: e.target.value,
                })
              }}
            />
            <Form.Label>insert your password</Form.Label>
          </Form.Group>
          <Button
            className="btn btn-success px-2 py-1 mb-2"
            type="submit"
            href="/feed"
          >
            Login
          </Button>
          <br></br>
          <span>Not subscribed yet? </span>
          <a href="/signup">Sign up</a>
        </Form>
      </Container>
    )
  }
}

export default LoginForm
