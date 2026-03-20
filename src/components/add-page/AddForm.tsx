<<<<<<< HEAD
import { Component } from "react"
import { Form, Button, Container, Alert } from "react-bootstrap"
import type { Item } from "../../types/user"
import type { UserResponse } from "../../types/user"
import { addNewItem } from "../../api/itemApi"
import { getUserInfo } from "../../api/userApi"
import LoginForm from "../account-page/LoginForm"
=======
import { Form, Button, Container, Alert } from "react-bootstrap"
import { addNewItem } from "../../api/itemApi"
import { useState, type ChangeEvent, type SubmitEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Category, ItemType } from "../../types/types"
>>>>>>> feature/geolocation

const AddForm = () => {
  const authToken = localStorage.getItem("accessToken")
  const navigate = useNavigate()
  const formatCategory = (str: string) =>
    str
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase())

<<<<<<< HEAD
  state: FormState = {
    item: {
      title: "",
      description: "",
      pics: null,
      user: "",
    },
    loading: false,
    error: null,
=======
const [item, setItem] = useState({
  title: "",
  description: "",
  pics: [] as File[],
  type: ItemType.BORROW,
  category: Category.WORK_TOOLS,
})

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setItem((prev) => ({ ...prev, [name]: value }))
>>>>>>> feature/geolocation
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 5) {
      setError("You can only upload a maximum of 5 images.")
      e.target.value = ""
      return
    }
    setError(null)
    setItem((prev) => ({ ...prev, pics: files ? Array.from(files) : [] }))
  }

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await addNewItem(authToken, item)
      alert("Upload successful!")
      navigate("/account")
    } catch (err) {
      setError(
        "Failed to upload item. Please check your connection or file size.",
      )
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

<<<<<<< HEAD
  render() {
    if (this.authToken == "")
      return (
        <>
          <Alert className="w-100 text-center">
            Logged out. Please log in again to add a new item!
          </Alert>
          <LoginForm />
        </>
      )
    else
      return (
        <Container>
          <h2>Upload Item</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Item title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={this.state.item.title}
                onChange={(e) => {
                  this.setState({
                    item: {
                      ...this.state.item,
                      title: e.target.value,
                    },
                  })
                }}
                placeholder="Enter item title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={this.state.item.description}
                onChange={(e) => {
                  this.setState({
                    item: {
                      ...this.state.item,
                      description: e.target.value,
                    },
                  })
                }}
                rows={3}
                placeholder="Enter item description"
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Files (Max 5)</Form.Label>
              <Form.Control
                type="file"
                multiple
                isInvalid={!!this.state.error}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const fileList = e.target.files
                  if (fileList && fileList.length > 5) {
                    this.setState({
                      error: `You can only upload a maximum of 5 images.`,
                    })
                    e.target.value = ""
                    return
                  }
                  this.setState({
                    error: null,
                    item: {
                      ...this.state.item,
                      pics: fileList ? Array.from(fileList) : [],
                    },
                  })
                }}
              />
              <Form.Control.Feedback type="invalid">
                {this.state.error}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={!!this.state.error || this.state.item.pics == null}
            >
              {this.state.loading ? "Uploading..." : "Upload Item"}
            </Button>
          </Form>
        </Container>
      )
  }
=======
  return (
    <Container>
      <h2>Upload Item</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Item title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={item.title}
            onChange={handleChange}
            placeholder="Enter item title"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={item.description}
            onChange={handleChange}
            rows={2}
            placeholder="Enter item description. 255 characters max."
          />
          {item.description.length > 255? (<Alert variant="success">max characters for the description is 255. Less words more sharing!</Alert>) : (<></>)}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Item Type</Form.Label>
          <div>
            <Form.Check
              inline
              label="Borrow"
              name="type"
              type="radio"
              id="type-borrow"
              value={ItemType.BORROW}
              checked={item.type === ItemType.BORROW}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Donate"
              name="type"
              type="radio"
              id="type-donate"
              value={ItemType.DONATE}
              checked={item.type === ItemType.DONATE}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            value={item.category}
            onChange={handleChange}
          >
            {Object.values(Category).map((value) => (
              <option key={value} value={value}>
                {formatCategory(value)}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload Files (Max 5)</Form.Label>
          <Form.Control
            type="file"
            multiple
            isInvalid={!!error}
            onChange={handleFileChange}
          />
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={loading || !!error || item.pics.length === 0}
        >
          {loading ? "Uploading..." : "Upload Item"}
        </Button>
      </Form>
    </Container>
  )
>>>>>>> feature/geolocation
}

export default AddForm
