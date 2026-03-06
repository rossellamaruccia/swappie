import { Component } from "react"
import { Container, Form, Button } from "react-bootstrap"

class SubscribeForm extends Component {
  state = {
    formValue: {
      email: "",
      password: "",
      position: "",
    },
  }
  render() {
    return (
      <Container className="hero py-5">
        <Form className="customForm">
          <h4>Become a swapper</h4>
          <Form.Group className="mb-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.formValue.email}
              onChange={(e) => {
                this.setState({
                  ...this.state.formValue,
                  email: e.target.value,
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
              value={this.state.formValue.password}
              onChange={(e) => {
                this.setState({
                  ...this.state.formValue,
                  password: e.target.value,
                })
              }}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Insert your city</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              value={this.state.formValue.position}
              onChange={(e) => {
                this.setState({
                  ...this.state.formValue,
                  position: e.target.value,
                })
              }}
            />
          </Form.Group>
          <Button className="btn btn-success px-2 py-1 mb-2" type="submit">
            Subscribe
          </Button>
          <br></br>
          <span>Already subscribed? </span>
          <a href="/login">Login</a>
        </Form>
      </Container>
    )
  }
}

export default SubscribeForm
