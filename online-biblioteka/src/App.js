import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginButton from './components/Auth/Login';
import Pocetna from './components/Pocetna';
import Lista from './components/Lista';
import Procitano from './components/Procitano';
import NaCitanju from './components/NaCitanju';
import Logout from './components/Auth/Logout';

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


  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
