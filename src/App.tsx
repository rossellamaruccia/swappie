import "bootstrap/dist/css/bootstrap.min.css"
import "./customs.css"
import { Container } from "react-bootstrap"
import HeaderBar from "./components/header/HeaderBar"
import FooterBar from "./components/footer/FooterBar"

function App() {
  return (
    <>
      <Container>
        <HeaderBar />
        <FooterBar />
      </Container>
    </>
  )
}

export default App
