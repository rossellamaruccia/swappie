import { Component } from "react"
import { Form, Button, Container, Alert } from "react-bootstrap"
import type { Item } from "../../types/user"
import type { UserResponse } from "../../types/user"
import { addNewItem } from "../../api/itemApi"
import { getUserInfo } from "../../api/userApi"
import LoginForm from "../account-page/LoginForm"

interface FormState {
  item: Item
  loading: false
  error: string | null
}
class AddForm extends Component {
  authToken = localStorage.getItem("accessToken")

  state: FormState = {
    item: {
      title: "",
      description: "",
      pics: null,
      user: "",
    },
    loading: false,
    error: null,
  }

  async componentDidMount() {
    try {
      const userData: UserResponse = await getUserInfo(this.authToken)
      this.setState({
        item: {
          ...this.state.item,
          user: userData.id,
        },
      })
    } catch {
      throw new Error()
    }
  }

  handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault()
    this.setState({ loading: true, error: null })
    try {
      await addNewItem(this.authToken, this.state.item)
      console.log("Upload successful!")
    } catch (error) {
      this.setState({
        error:
          "Failed to upload item. Please check your connection or file size.",
        loading: false,
      })
      console.log(error)
    } finally {
      this.setState({ loading: false })
    }
  }

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
}

export default AddForm
