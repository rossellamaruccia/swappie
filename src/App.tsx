import "bootstrap/dist/css/bootstrap.min.css"
import "./customs.css"
import { Container, Spinner } from "react-bootstrap"
import HeaderBar from "./components/header/HeaderBar"
import FooterBar from "./components/footer/FooterBar"
import FeedContainer from "./components/body/FeedContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HeroBanner from "./components/hero/HeroBanner"
import LoginForm from "./components/signup-page/LoginForm"
import SubscribeForm from "./components/signup-page/SubscribeForm"
import AccountContainer from "./components/account-page/AccountContainer"
import AddForm from "./components/add-page/AddForm"
import { useState, useEffect } from "react"
import { isTokenValid, logout } from "./utils/auth"
import EditForm from "./components/account-page/EditForm"



function App() { 
  const [error, setError] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)
    const authToken = localStorage.getItem("accessToken")

  useEffect(() => {
    const checkToken = async () => {
      if (authToken) {
        const valid = await isTokenValid(authToken)
        if (!valid) {
          logout()
          setError(true)
        }
      } else {
        setError(true)
      }
      setIsInitializing(false)
    }
    checkToken()
  }, [authToken])
  
  if (isInitializing) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" />
      </Container>
    )
  }
  return (
    <>
      <Container>
        <HeaderBar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={!authToken || error ? <HeroBanner /> : <FeedContainer />}
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SubscribeForm />} />
           <Route 
            path="/account" 
            element={(!authToken || error) ? <Navigate to="/login" /> : <AccountContainer />} 
          />
            <Route path="/account/edit" element={<EditForm />} />
            <Route path="/add" element={<AddForm />} />
            <Route path="/settings" />
          </Routes>
        </BrowserRouter>

        <FooterBar />
      </Container>
    </>
  )
}

export default App
