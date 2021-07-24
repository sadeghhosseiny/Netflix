import React, { useRef } from 'react';
import Button from '../../lib/button/Button';
import Input from '../../lib/input/input';
import styles from './Login.module.css';

function Login(props) {

    const handleSignIn = (e) => {
        e.preventDefault();
    };

    const BackToSignupPage = (e) => {
        props.setLogin(false);
        e.preventDefault();
    };
    return (
        <div className={styles.loginBody}>
            <form>
                <h1>Sign In</h1>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button onClick={handleSignIn} type="submit" title="Sign In" />
            </form>
            <div className={styles.login_signup_now}>
                <p>New to Netflix?&nbsp;</p>
                <a onClick={BackToSignupPage}>Sign up now</a>
            </div>
        </div>
    );
}

export default Login;
