import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Button, Alert } from "react-bootstrap"
import { getUserInfo } from "../../api/userApi"
import { isTokenValid } from "../../utils/auth"
import { getItemsPerUser } from "../../api/itemApi"
import type { User } from "../../types/types"
import type { Item } from "../../types/types"
import ItemElement from "../body/feed-element/ItemElement"
import LoginForm from "../signup-page/LoginForm"

const AccountContainer = () => {
  const [user, setUser] = useState<User | null>(null)
  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("accessToken")
      if (!authToken || !isTokenValid(authToken)) {
        setError(true)
        setIsLoading(false)
        return
      }

      try {
        const [userData, itemData] = await Promise.all([
          getUserInfo(authToken),
          getItemsPerUser(authToken),
        ])

        setUser(userData)
        setItems(itemData)
      } catch (err) {
        console.error("Fetch failed:", err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <Alert className="my-3 p-3 text-center">Loading user profile...</Alert>
    )
  }

  if (error || !user) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">
          Session expired or user not found. Please log in again.
        </Alert>
        <LoginForm />
      </Container>
    )
  }

  return (
    <Container fluid className="py-4">
      <Row className="align-items-center">
        <Col xs={12} md={3} className="text-center mb-3">
          {user.profilePic ? (
            <img
              src={user.profilePic}
              alt="Profile"
              className="img-fluid rounded-circle shadow-sm"
              style={{ width: "150px" }}
            />
          ) : (
            <>
              <div
                className="dummy-profile-pic mx-auto mb-2"
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "#e9ecef",
                  borderRadius: "50%",
                }}
              ></div>
              <Button
                variant="link"
                size="sm"
                onClick={() => navigate("/account/edit")}
              >
                Update picture
              </Button>
            </>
          )}
        </Col>

        <Col xs={12} md={6}>
          <h3>
            {user.name} {user.surname}
          </h3>
          <h5 className="text-muted">{user.city}</h5>
          <Button variant="success" className="mt-2">
            Send me a message
          </Button>
        </Col>

        <Col xs={12} md={3} className="d-flex flex-column gap-2">
          <Button variant="warning" onClick={() => navigate("/account/edit")}>
            Edit Profile
          </Button>
          <Button variant="danger">Delete Profile</Button>
        </Col>
      </Row>

      <hr className="my-5" />

      <Row>
        <Col>
          <h3 className="mb-4">Your Items ({items.length})</h3>
          {items.length > 0 ? (
            items.map((item, i) => <ItemElement key={i+1} {...item} />)
          ) : (
            <p className="text-muted">You haven't posted any items yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default AccountContainer
