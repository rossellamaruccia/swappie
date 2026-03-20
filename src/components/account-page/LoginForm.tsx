import React, { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { loggingUser } from "../../api/userApi"
import { Navigate } from "react-router-dom"


const LoginForm = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" })

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault()
    try {
      loggingUser(formValue)
<<<<<<< HEAD:src/components/account-page/LoginForm.tsx
      console.log("done")
      return <Navigate to="/account" replace />
=======
>>>>>>> feature/geolocation:src/components/signup-page/LoginForm.tsx
    } catch(error) {
       return "Something went wrong: " + error
    }
  }

  return (
    <Container className="hero py-5">
      <Form className="customForm" onSubmit={handleSubmit}>
        <h4>login</h4>
        <Form.Group className="mb-2">
          <Form.Control
            type="email"
            placeholder="Email address"
            value={formValue.email}
            onChange={(e) =>
              setFormValue({ ...formValue, email: e.target.value })
            }
          />
          <Form.Label>insert the email address you use on Swappie</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={formValue.password}
            onChange={(e) =>
              setFormValue({ ...formValue, password: e.target.value })
            }
          />
          <Form.Label>insert your password</Form.Label>
        </Form.Group>
        <Button
          className="btn btn-success px-2 py-1 mb-2"
          type="submit"
        >
          Login
        </Button>
        <br />
        <span>Not subscribed yet? </span>
        <a href="/signup">Sign up</a>
      </Form>
    </Container>
  )
}

export default LoginForm
