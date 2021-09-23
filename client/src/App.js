import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/layout/Navigation/Navigation';
import Footer from './components/layout/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import CoastersPage from './components/pages/CoastersPage/CoastersPage';
import CoasterDetails from './components/pages/CoasterDetails/CoasterDetails';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/montañas-rusas" render={() => <CoastersPage />} />
        <Route path="/montañas-rusas/:id" render={(props) => <CoasterDetails {...props} />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
