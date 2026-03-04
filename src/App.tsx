import "bootstrap/dist/css/bootstrap.min.css"
import "./customs.css"
import { Container } from "react-bootstrap"
import HeaderBar from "./components/header/HeaderBar"
import FooterBar from "./components/footer/FooterBar"
import FeedContainer from "./components/body/FeedContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Container>
        <HeaderBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FeedContainer />} />
            <Route path="/member/signup" />
            <Route path="/account" />
            <Route path="/settings" />
          </Routes>
        </BrowserRouter>

        <FooterBar />
      </Container>
    </>
  )
}

export default App
