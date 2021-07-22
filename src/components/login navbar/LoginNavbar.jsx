import React from 'react';
import Button from '../../lib/button/Button';
import styles from './LoginNavbar.module.css';

function LoginNavbar() {
    return (
        <div className={styles.loginScreen}>
            <div>
                <img className={styles.loginNavbarLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" />
                <Button className={styles.loginNavbarBtn} title={"Sign In"} />
            </div>
            <div className={styles.loginScreen_gradient} />
        </div>
    );
}

export default LoginNavbar;
