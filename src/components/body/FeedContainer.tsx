import { Container, Row} from "react-bootstrap"
import { Component } from "react"
import { updateUserLocation } from "../../api/userApi"

class FeedContainer extends Component {

  authToken = localStorage.getItem("accessToken")

  state = {
    fetchData: {
      elements: [],
    },
  }

  fetchItems = () => {
    fetch("url/items")
      .then((resp) => {
        if (resp.ok) {
          return resp.json
        } else throw new Error()
      })
      .then((data) => {
        this.setState({
          ...this.state.fetchData,
          elements: data,
        })
      })
      .catch((e) => console.log(e))
  }

  componentDidMount() {
      this.fetchItems();
      updateUserLocation(this.authToken!)
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <h4>What's new around you:</h4>
          <hr></hr>
        </Row>
      </Container>
    )
  }
}

export default FeedContainer