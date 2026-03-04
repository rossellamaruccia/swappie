import "bootstrap/dist/css/bootstrap.min.css"
import "./customs.css"
import { Container } from "react-bootstrap"
import HeaderBar from "./components/header/HeaderBar"
import FooterBar from "./components/footer/FooterBar"
import FeedContainer from "./components/body/FeedContainer"

function App() {
  return (
    <>
      <Container>
        <HeaderBar />
        <FeedContainer />
        <FooterBar />
      </Container>
    </>
  )
}

export default App
