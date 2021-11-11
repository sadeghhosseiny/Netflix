import './App.css';
// import HomePage from './pages/Home Page/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUp Page/SignUpPage';
import { useSelector } from 'react-redux';
// import MoviePage from './pages/Movie Page/MoviePage';
import UserMovieListPage from './pages/User Movie List Page/UserMovieListPage';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/Home Page/HomePage'));
const MoviePage = lazy(() => import('./pages/Movie Page/MoviePage'));

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
          <Suspense fallback={<div>Loading...</div>}>

            <Switch>

              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/List">
                <UserMovieListPage />
              </Route>
              <Route path="/:movieName">
                <MoviePage />
              </Route>
            </Switch>
          </Suspense>
        )}

      </Router>
    </div>
  );
}

export default App;
