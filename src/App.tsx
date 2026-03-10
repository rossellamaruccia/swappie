import "bootstrap/dist/css/bootstrap.min.css"
import "./customs.css"
import { Container } from "react-bootstrap"
import HeaderBar from "./components/header/HeaderBar"
import FooterBar from "./components/footer/FooterBar"
import FeedContainer from "./components/body/FeedContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeroBanner from "./components/hero/HeroBanner"
import LoginForm from "./components/signup-page/LoginForm"
import SubscribeForm from "./components/signup-page/SubscribeForm"
import { useSelector } from "react-redux"

function App() {
const authToken = useSelector((state) => state.main.authToken)
  return (
    <>
      <Container>
        <HeaderBar />
        <BrowserRouter>
          <Routes>
            {authToken == "" ? (
              <Route path="/" element={<HeroBanner />} />
            ) : (
              <Route path="/" element={<FeedContainer />} />
            )}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SubscribeForm />} />
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
