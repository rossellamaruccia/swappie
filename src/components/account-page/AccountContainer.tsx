import { Component } from "react"
// import { Container, Row, Col, Alert } from "react-bootstrap"
// import { checkToken, getUserInfo } from "../../api/userApi"
// import type { User, UserFormState } from "../../types/types"
// import type { Item } from "../../types/types"
// import ItemElement from "../body/feed-element/ItemElement"

class AccountContainer extends Component {
  authToken = localStorage.getItem("accessToken")

//   state: UserFormState = {
//     user: {
//       id: null,
//       name: "",
//       surname: "",
//       email: "",
//       city: "",
//       profilePic: "",
//       items: [],
//       location: [0.0, 0.0],
//     },
//     isLoading: true,
//     error: null,
//   }

//   async componentDidMount() {
//     try {
//       const user: User = await getUserInfo(this.authToken)
//       //const items: Item[] = await getItemsPerUser(this.authToken, user.id!)
//       this.setState({
//         user: {
//           id: user.id,
//           name: user.name,
//           surname: user.surname,
//           email: user.email,
//           city: user.city,
//           profilePic: user.profilePic,
//           items: items,
//           location: user.location,
//         },
//         isLoading: false,
//       })
//     } catch (error) {
//       this.setState({ error: true, isLoading: false })
//       console.log("Something went wrong" + error)
//     }
//   }

//   render() {
//     const { user, isLoading, error } = this.state
//     //loading profile
//     if (isLoading) return <div>Loading user profile...</div>
//     //error
//     else if (error) return <div>Error: {error}</div>
//     else if (user)
//       return (
//         <>
//           <Container fluid className="justify-content-center">
//             <Row>
//               <Col xs="3" className="text-center">
//                 {user.profilePic == null ? (
//                   <>
//                     <div className="dummy-profile-pic"></div>
//                     <a href="/account/edit"> update your profile picture</a>
//                   </>
//                 ) : (
//                   <img src={user.profilePic} />
//                 )}
//               </Col>
//               <Col xs="7">
//                 <h3>
//                   {user.name} {user.surname}
//                 </h3>
//                 <h5>{user.city}</h5>
//                 <Button className="btn btn-success p-1">
//                   Send me a message
//                 </Button>
//               </Col>
//               <Col>
//                 <Button className="btn btn-warning p-1" href="/editProfile">
//                   edit profile
//                 </Button>
//                 <Button className="btn btn-danger p-1 m-1">
//                   Delete profile
//                 </Button>
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//                 <h3>Your items</h3>
//                 {user.items.map((item) => (
//                   <ItemElement title={item.title} description={item.description} pics={item.pics} user={item.user} />
//                 ))}
//               </Col>
//             </Row>
//           </Container>
//         </>
//       )
//   }
 }

export default AccountContainer
