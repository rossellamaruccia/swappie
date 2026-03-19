import { Form, Button, Container } from "react-bootstrap"
import { addNewItem } from "../../api/itemApi"
import { useState, type ChangeEvent, type SubmitEvent } from "react"
import { useNavigate } from "react-router-dom"

const AddForm = () => {
  const authToken = localStorage.getItem("accessToken")
  const navigate = useNavigate()

const [item, setItem] = useState({
  title: "",
  description: "",
  pics: [] as File[],
  type: "BORROW",
})

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setItem((prev) => ({ ...prev, [name]: value }))
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
            rows={3}
            placeholder="Enter item description"
          />
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
              value="BORROW"
              checked={item.type === "BORROW"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Donate"
              name="type"
              type="radio"
              id="type-donate"
              value="DONATE"
              checked={item.type === "DONATE"}
              onChange={handleChange}
            />
          </div>
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
}

export default AddForm
