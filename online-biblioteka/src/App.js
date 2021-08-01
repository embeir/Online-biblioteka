import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Pocetna from './components/Pocetna';
import Lista from './components/Lista';
import Procitano from './components/Procitano';
import NaCitanju from './components/NaCitanju';
import Logout from './components/Auth/Logout';

const App = () => {

  useEffect(() => {
    props.onTryAutoSignup();
  }, []);

  let routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pocetna} exact />
        <Route path="/login" component={Auth} />
        <Route path="/sign-up" component={Auth} />
      </Switch>
    </BrowserRouter>
  )


  if (props.isAuthenticated) {
    routes = (
      <BrowserRouter>
        <Switch>
          <Route path="/na-citanju" render={props => <NaCitanju {...props} />} />
          <Route path="/procitano" render={props => <Procitano {...props} />} />
          <Route path="/lista-zelja" render={props => <Lista {...props} />} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Pocetna} />
        </Switch>
      </BrowserRouter>
    )
  }


  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
