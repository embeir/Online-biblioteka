import './components/Style/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginButton from './components/Auth/Login';
import Pocetna from './components/Pocetna';
import Procitano from './components/Procitano';
import Logout from './components/Auth/Logout';
import NaCitanju from './components/NaCitanju';
import Checkout from './components/Checkout';
import { useAuth0 } from "@auth0/auth0-react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(`${process.env.PUBLISHABLE_KEY}`)


const App = () => {

  const { isAuthenticated } = useAuth0();

  <div>
    <LoginButton data-testid="loginBtn" />
    <Logout data-testid="logoutBtn" />
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


  let authRoutes = (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pocetna} exact />
        <Route path="/procitano" component={Procitano} />
        <Route path="/na-citanju" component={NaCitanju} />
        <Elements stripe={stripePromise} >
          <Route path="/korpa" component={Checkout} />
        </Elements>
      </Switch>
    </BrowserRouter>
  )




  return (
    <div>
      <h1 data-testid="header" className="Applink" >Online-biblioteka</h1>
      {isAuthenticated ? authRoutes : routes}
    </div>
  );
}

export default App;
