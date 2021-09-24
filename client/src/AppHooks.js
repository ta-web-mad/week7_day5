import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/layout/Navigation/Navigation';
import Footer from './components/layout/Footer/Footer';
import { useState, useEffect } from 'react';
import AuthService from './services/auth.service';
import Routes from './components/routes';

const authService = new AuthService()

const App = () => {
  const [loggedUser, setLoggedUser] = useState(undefined)
  
  //Equivalente al this.state inferior
  // loggedUser
  // this.state.loggedUser

  //Equivalente al setState inferior
  const storeUser = (user) => setLoggedUser(user)
  // const storeUser = (user) => this.setState({ loggedUser: user })
  
  const fetchUser = () => {
    authService.isloggedin()
      .then(res => storeUser(res.data))
      .catch(err => storeUser(null))
  }
  
  //Equivalente al componentDidMount inferior
  useEffect(() => {
    fetchUser()
  }, [])
  // componentDidMount = () => {
  //   this.fetchUser()
  // }

  return (
    <>
      <Navigation loggedUser={loggedUser} storeUser={storeUser} />
      <Routes storeUser={storeUser} loggedUser={loggedUser} />
      <Footer />
    </>
  );

}

export default App;
