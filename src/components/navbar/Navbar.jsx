import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    const [showBlavkNavbar, setShowBlackNavbar] = useState(false);

    const handleTransition = () => {
        if (window.scrollY > 100) {
            setShowBlackNavbar(true);
        }
        else {
            setShowBlackNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleTransition);
        return () => window.removeEventListener("scroll", handleTransition);
    }, []);

    return (
        <div className={`${showBlavkNavbar ? styles.blackNav : styles.nav}`}>
            {console.log(showBlavkNavbar)}
            <div className={styles.logoContainer}>
                <img className={styles.netflixLogo}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                    alt="netflix logo" />
                <img className={styles.avatarLogo}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar logo" />
                {/* src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400*400.png" */}
            </div>
        </div>
    );
}

export default Navbar;
