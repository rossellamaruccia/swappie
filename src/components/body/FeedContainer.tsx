import { Container, Row} from "react-bootstrap"
import FeedElement from "./feed-element/FeedElement"
import { Component } from "react"

class FeedContainer extends Component {

    state = {
        fetchData: {
            elements: []
        }
    }

    fetchItems = () => {
        fetch('url/items')
            .then((resp) => {
                if (resp.ok) {
                    return resp.json;
                } else throw new Error
            })
            .then((data) => {
                this.setState({
                    ...this.state.fetchData,
                    elements: data
            })
        })
        .catch((e) => console.log(e))
    }

    componentDidMount() {
        this.fetchItems()
    }

    render() {
        return (
          <Container fluid>
            <Row>
              <h4>What's new around you:</h4>
                    <hr></hr>
                    {
                        this.state.fetchData.elements.map((object) => { return(<FeedElement objectProp={{ object }} key={object.id} />)})
                    }
            </Row>
          </Container>
        )
    }
    
}

export default FeedContainer