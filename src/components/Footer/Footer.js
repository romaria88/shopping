import styles from './Footer.module.css';
import React from 'react';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer1}>
                <div className={styles.footerLogo}>
                    <img className={styles.logoImg} src="/img/Group 98.png" alt='Logo' />
                    <h4 className={styles.logoName}> Coral </h4>
                    <img className={styles.logoImg} src="/img/Group 98.png" alt='Logo' />
                </div>
                <p> Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua</p>
                <div className={styles.mediaLogo}>
                    <img src='/img/facebook.png' alt='' className={styles.mediaImgLogo}></img>
                    <img src='/img/twitter.png' alt='' className={styles.mediaImgLogo}></img>
                    <img src='/img/linkedin.png' alt='' className={styles.mediaImgLogo}></img>
                    <img src='/img/dribbble.png' alt='' className={styles.mediaImgLogo}></img>
                </div>
            </div>
            <div className={styles.footer2}>
                <h4>Catalog</h4>
                <p>Necklaces</p>
                <p>Hoodies</p>
                <p>Jewelry Box</p>
                <p>T-shirt</p>
                <p>Jacket</p>
            </div>
            <div className={styles.footer3}> 
                <h4>About us</h4>
                <p>Our producers</p>
                <p>Sitemap</p>
                <p>About Us</p>
                <p>FAQ</p>
                <p>Terms & Conditions</p>
            </div>
            <div className={styles.footer4}>
                <h4>CUSTOMER SERVICES</h4>
                <p>Contact Us</p>
                <p>Track Your Order</p>
                <p>Product Care & Repair </p>
                <p>Book An Appointment</p>
                <p>Shipping & Returns</p>
            </div>
        </div>
    );
}