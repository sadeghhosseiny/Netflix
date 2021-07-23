import './App.css';
import HomePage from './pages/Home Page/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUp Page/SignUpPage';
import LoginPage from './pages/Login Page/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Sign up">
            <SignUpPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
