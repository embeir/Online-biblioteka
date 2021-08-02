import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginButton from './components/Auth/Login';
import Pocetna from './components/Pocetna';
import Procitano from './components/Procitano';
import NaCitanju from './components/NaCitanju';
import Logout from './components/Auth/Logout';
import Checkout from './components/Checkout';
import Profile from './components/Auth/Profile';



const App = () => {
  <div>
    <LoginButton />
    <Logout />
  </div>


  let routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pocetna} exact />
        <Route path="/login" component={LoginButton} />
        <Route path="/sign-up" component={Logout} />
      </Switch>
    </BrowserRouter>
  )
 
    

  if (Profile.isAuthenticated) {
    let routes = (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Pocetna} exact />
          <Route path="/login" component={LoginButton} />
          <Route path="/sign-up" component={Logout} />
          <Route path="/na-citanju" component={NaCitanju} />
          <Route path="/procitano" component={Procitano} />
          <Route path="/korpa" component={NaCitanju} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    )
  };



  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
