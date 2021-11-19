import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../lib/button/Button';
import Input from '../../lib/input/input';
import styles from './Login.module.css';
import { useHistory } from 'react-router';

function Login() {

  const history = useHistory();
  const [infoOfLogin, setInfoOfLogin] = useState({});

  const handleGetInfo = (e) => {
    const { name, value } = e.target;
    setInfoOfLogin({
      ...infoOfLogin, [name]: value
    });
  };

  const [isClickedOnSignIn, setIsClickedOnSignIn] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsClickedOnSignIn(true);
    if (infoOfLogin?.password?.length >= 6 && infoOfLogin?.email?.includes('@gmail')) {
      setIsClickedOnSignIn(false);
      history.push("/home");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.signupScreen}>
        <div className={styles.signinScreen_gradient} />
        <div className={styles.signinScreen_body}>
          <div className={styles.loginBody}>
            <form>
              <h1>Sign In</h1>
              <Input name="email" onChange={handleGetInfo} type="email" placeholder="Email" />
              {isClickedOnSignIn &&
                <span>
                  your email is not valid
                </span>
              }
              <Input name="password" onChange={handleGetInfo} type="password" placeholder="Password" />
              {isClickedOnSignIn &&
                <span>
                  your password is not valid
                </span>
              }
              <Button onClick={handleSignIn} type="submit" >
                Sign In
              </Button>
            </form>
            <div className={styles.login_signup_now}>
              <p>New to Netflix?&nbsp;</p>
              <Link to="/">
                Sign up now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;