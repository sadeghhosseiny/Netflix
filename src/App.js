import './App.css';
import HomePage from './pages/Home Page/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/Login Page/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route>
            <LoginPage path="/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
