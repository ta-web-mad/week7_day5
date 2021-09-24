import { Container } from "react-bootstrap"

const Profile = ({ loggedUser }) => {

  return (
    <Container>
      <h1>¡Bienvenid@, {loggedUser.username}!</h1>
    </Container>
  )
}

export default Profile