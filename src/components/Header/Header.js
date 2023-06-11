import React  from 'react';
import { BsCart2 } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import styles from './Header.module.css';

import { Link } from 'react-router-dom';         

function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.headerCatalog}>
                <button>Home</button>
                <Link className={styles.buttonLink} to={`/cards`} >All thing</Link>
                <button>About</button>
                <button>Contact</button>
            </div>
            <div className={styles.headerLogo}>
                <img className={styles.logoImg} src="/img/Group 98.png" alt='Logo' />
                <h3 className={styles.logoName}>Coral</h3>
                <img className={styles.logoImg} src="/img/Group 98.png" alt='Logo' />
            </div>
            <div className={styles.headerButton}>
                <div className={styles.button1}>
                    <CiUser className={styles.img1} /> 
                    <p>Account</p>
                </div>
                <div className={styles.button2}>
                    <BsCart2 className={styles.img1} /> 
                    <p>Shopping</p>
                </div>
            </div>
        </header>
    ); 
};
export default Header;