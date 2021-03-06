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
      <div className={styles.logoContainer}>
        <img className={styles.netflixLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt="netflix logo" />
        <img className={styles.avatarLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar logo" />
      </div>
    </div>
  );
}

export default Navbar;
