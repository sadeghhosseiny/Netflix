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
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="netflix logo" />
                <img className={styles.avatarLogo}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar logo" />
                {/* src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400*400.png" */}
            </div>
        </div>
    );
}

export default Navbar;
