import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Featured from './components/Featured/Featured';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
        <Switch>
          <Route path="/home">
              <Home/>
          </Route>
          <Route path="/register">
            <Registration/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/feature">
           <Featured/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
