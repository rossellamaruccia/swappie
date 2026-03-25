import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Button, Alert } from "react-bootstrap"
import { getUserInfo } from "../../api/userApi"
import { getAuthStatus } from "../../utils/authTools"
import { useAuth } from "../../utils/AuthContext"
import { getItemsPerUser } from "../../api/itemApi"
import type { ItemGetResponse, Item, User } from "../../types/types"
import ItemElement from "../body/feed-element/ItemElement"
import LoginForm from "../signup-page/LoginForm"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { FaRegMessage } from "react-icons/fa6"
import { FiLogOut } from "react-icons/fi"
import AddButton from "../header/AddButton"
import LocationMap from "./LocationMap"
import EditModal from "../body/feed-element/EditModal"
import { editItem } from "../../api/itemApi"

const AccountContainer = () => {
  const [user, setUser] = useState<User | null>(null)
  const [items, setItems] = useState<ItemGetResponse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ItemGetResponse | null>(null)
 const authentication = useAuth()
 const authToken = localStorage.getItem("accessToken")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      if (!authToken || !getAuthStatus(authToken)) {
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

  const handleEditClick = (item : ItemGetResponse) => {
    setShowEditModal(true)
    setSelectedItem(item)
  }

  const handleCloseModal = () => {
    setShowEditModal(false)
    setSelectedItem(null)
    alert("success!")
    
  }

  const handleSaveItem = async (updatedItem: Item) => {
    console.log("Saving updated item:", updatedItem)
    await editItem(authToken, updatedItem, selectedItem!.id)
    
    handleCloseModal();
  }

  if (isLoading) {
    return (
      <Alert className="my-3 p-3 text-center w-50 mx-auto">
        Loading user profile...
      </Alert>
    )
  }

  if (error || !user) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="info" className="my-3 p-3 text-center w-50 mx-auto">
          Session expired. Please log in again.
        </Alert>
        <LoginForm />
      </Container>
    )
  }

  return (
    <Container fluid className="py-4">
      <Row className="align-items-top">
        <Col xs={12} md={2} className="text-center mb-3">
          {user.profilePic ? (
            <img
              src={user.profilePic}
              alt="Profile picture"
              className="img-fluid shadow-sm profile-picture"
            />
          ) : (
            <div className="img-fluid shadow-sm dummy-profile-pic mx-auto mb-2"></div>
          )}
        </Col>

        <Col xs={12} md={6}>
          <h3>
            {user.name} {user.surname}
          </h3>
          <h5 className="text-muted">{user.city}</h5>
          {user.location ? (
            <div className="w-75 ms-0">
              <LocationMap lat={user.location.lat} lng={user.location.lng} />
            </div>
          ) : (
            <></>
          )}
        </Col>

        <Col xs={12} md={4} className="text-end">
          <AddButton />
          <Button className="btn settingsButton mt-1">
            <FaRegMessage />
            <span className="label">Check your messages</span>
          </Button>
          <Button
            className="btn settingsButton mt-0"
            onClick={() => {
              authentication.logout()
              navigate("/")
            }}
          >
            <FiLogOut />
            <span className="label">Log out</span>
          </Button>
          <Button
            className="btn settingsButton mt-0"
            onClick={() => navigate("/account/edit")}
          >
            <FaEdit />
            <span className="label">Edit your profile</span>
          </Button>
          <Button className="btn settingsButton mt-0">
            <MdDelete />
            <span className="label">Delete your profile</span>
          </Button>
        </Col>
      </Row>

      <hr className="my-5" />

      <Row>
        <h3 className="mb-4">Your Items ({items.length})</h3>

        {items.length > 0 ? (
          items.map((item, i) => (
            <Col xs="12" md="4" className="m-0">
              <ItemElement item={item} key={i + 1} />
              <Button onClick={() => handleEditClick(item)}>Edit item</Button>
              <EditModal
                show={showEditModal}
                handleClose={handleCloseModal}
                item={item}
                onSave={handleSaveItem}
              />
            </Col>
          ))
        ) : (
          <p className="text-muted">You haven't posted any items yet.</p>
        )}
      </Row>
    </Container>
  )
}

export default AccountContainer
