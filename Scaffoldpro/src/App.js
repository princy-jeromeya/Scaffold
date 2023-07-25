import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import RegisterPage from './component/Register';
import Login from './component/Login';
import Home from './component/Home';
import Details from './DetailsPage/Details';



function App() {

  return (
    <div>

      <Router>
        <Switch>

          <Route exact path="/" />
          <Route exact path='/Register' component={RegisterPage} />
          <Route path='/Login' component={Login} />
          <Route path='/Home' component={Home} />
          <Route path='/productdetails' component={Details} />

        </Switch>
      </Router>
    </div>



  );

}

export default App;