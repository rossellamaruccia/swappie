<<<<<<< HEAD
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
=======
import { useState, useEffect, type ChangeEvent, type SubmitEvent } from "react"
import { Container, Form, Button, Alert } from "react-bootstrap"
import type { User } from "../../types/types"
import { modifyUser, getUserInfo, updateProfilePic, updateUserLocation } from "../../api/userApi"
import { useNavigate } from "react-router-dom"
import { isTokenValid } from "../../utils/auth"
import LocationPicker from "./LocationPicker"
import LocationMap from "./LocationMap"

const EditForm = () => {
  const navigate = useNavigate()
  const authToken = localStorage.getItem("accessToken")

  const [user, setUser] = useState<User>({
    name: "",
    surname: "",
    email: "",
    profilePic: undefined,
    city: "",
    location: {
      lng: 0.0,
      lat: 0.0
    },
  })

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      if (!authToken || !isTokenValid(authToken)) {
        navigate("/login")
        return
      }
      try {
        const userData = await getUserInfo(authToken)
        setUser(userData)
      } catch (err) {
        setError("Could not get user information")
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    loadUser()
  }, [authToken, navigate])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = await updateProfilePic(authToken, e.target.files[0])
      setUser((prev) => ({
        ...prev,
        profilePic: file,
      }))
    }
  }

    const handleLocationChange = (
      coords: { lat: number; lng: number } | null,
    ) => {
      setUser((prev) => ({
        ...prev,
        location: coords ? coords : { lat: 0, lng: 0 },
      }))
      updateUserLocation(authToken, user.location!)
    }

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      await modifyUser(authToken!, user)
      console.log("Update successful")
      navigate("/account")
    } catch (err) {
      console.log(err)
      setError("Something went wrong during the update.")
      setSubmitting(false)
    }
  }

  if (isLoading) return <Container className="py-5">Loading...</Container>

  return (
    <Container className="hero py-5">
      <Form className="customForm" onSubmit={handleSubmit}>
        <h4>Edit your profile</h4>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={user.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            name="surname"
            type="text"
            value={user.surname}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            type="text"
            value={user.city}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload a profile picture</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>

        <Form.Group className="my-3 p-3 border rounded bg-light">
          <h6>Update my location</h6>
          <LocationPicker onLocationFound={handleLocationChange} />
          { user.location? (
            <div className="mt-3">
              <LocationMap lat={user.location.lat} lng={user.location.lng} />
            </div>
          ) : (<></>)}
        </Form.Group>

        <Button variant="success" type="submit" disabled={submitting}>
          {submitting ? "Saving..." : "Edit profile"}
        </Button>
      </Form>
    </Container>
  )
>>>>>>> feature/geolocation
}

export default EditForm
