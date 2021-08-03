import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginButton from './components/Auth/Login';
import Pocetna from './components/Pocetna';
import Procitano from './components/Procitano';
import Logout from './components/Auth/Logout';
import Checkout from './components/Checkout';
import { useAuth0 } from "@auth0/auth0-react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(`${process.env.PUBLISHABLE_KEY}`)


const App = () => {

  const { isAuthenticated } = useAuth0();

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


  let authRoutes = (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pocetna} exact />
        <Route path="/login" component={LoginButton} />
        <Route path="/sign-up" component={Logout} />
        <Route path="/procitano" component={Procitano} />
        <Elements stripe={stripePromise} >
          <Route path="/korpa" component={Checkout} />
        </Elements>
      </Switch>
    </BrowserRouter>
  )




  return (
    <div>
      {isAuthenticated ? authRoutes : routes}
    </div>
  );
}

export default App;
