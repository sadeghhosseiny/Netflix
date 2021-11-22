import './App.css';
// import HomePage from './pages/Home Page/HomePage';
// import SignUpPage from './pages/signUpPage/SignUpPage';
// import MoviePage from './pages/Movie Page/MoviePage';
// import UserMovieListPage from './pages/userMovieListPage/UserMovieListPage';
// import LogIn from './pages/logIn/logIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const MoviePage = lazy(() => import('./pages/moviePage/MoviePage'));
const UserMovieListPage = lazy(() => import('./pages/userMovieListPage/UserMovieListPage'));
const SignUpPage = lazy(() => import('./pages/signUpPage/SignUpPage'));
const LogIn = lazy(() => import('./pages/logIn/logIn'));

function App() {


  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <SignUpPage />
            </Route>
            <Route path="/logIn">
              <LogIn />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/list">
              <UserMovieListPage />
            </Route>
            <Route path="/:movieName">
              <MoviePage />
            </Route>
          </Switch>
        </Suspense>

      </Router>
    </div>
  );
}

export default App;
