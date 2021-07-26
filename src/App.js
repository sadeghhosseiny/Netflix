import './App.css';
import HomePage from './pages/Home Page/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUp Page/SignUpPage';
import { useSelector } from 'react-redux';
import MoviePage from './pages/Movie Page/MoviePage';

function App() {

  //const selector = useSelector(state => state.userReducer.user);

  const user = localStorage.getItem('user');

  return (
    <div className="App">
      <Router>
        {user == "" ? (

          // <Route exact path="/">

          <SignUpPage />
          // </Route>
        ) : (
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>
            <Route>
              <MoviePage exact path="/:movieName" />
            </Route>
          </Switch>
        )}

      </Router>
    </div>
  );
}

export default App;
