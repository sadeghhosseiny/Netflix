import './App.css';
import HomePage from './pages/Home Page/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUp Page/SignUpPage';
import { useSelector } from 'react-redux';

function App() {
  const selector = useSelector(state => state.userReducer.user);

  const user = selector[0];
  console.log("this is user --> ", user);

  return (
    <div className="App">
      <Router>
        {!user ? (

          // <Route exact path="/">

          <SignUpPage />
          // </Route>
        ) : (
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        )}

      </Router>
    </div>
  );
}

export default App;
