import { Component } from "react"
import { Form, Button, Container } from "react-bootstrap"

class AddForm extends Component {
  state = {
    formValue: {
      name: "",
      description: "",
      image_url: "",
    },
  }

  render() {
    return (
      <Container>
        <h2>Upload Item</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.state.formValue.name}
              onChange={(e) => {
                this.setState({
                  formValue: {
                    ...this.state.formValue,
                    name: e.target.value,
                  },
                })
              }}
              placeholder="Enter item name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={this.state.formValue.description}
              onChange={(e) => {
                this.setState({
                  formValue: {
                    ...this.state.formValue,
                    description: e.target.value,
                  },
                })
              }}
              rows={3}
              placeholder="Enter item description"
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload File</Form.Label>
            <Form.Control
              type="file"
              name="file"
              accept="image/*"
              value={this.state.formValue.image_url}
              onChange={(e) => {
                this.setState({
                  formValue: {
                    ...this.state.formValue,
                    image_url: e.target.value,
                  },
                })
              }}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Upload Item
          </Button>
        </Form>
      </Container>
    )
  }
}

export default AddForm
