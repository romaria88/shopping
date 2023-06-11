import styles from './Page2.module.css';
import React from 'react';

export default function Page2() {
    return (
        <div className={styles.media}>
            <h2> Follow Products and Discounts on Instagram</h2> 
            <div className={styles.mediaImage}>
                <img src='/img/image-product1.png' alt="Collection" className={styles.mediaImg}></img>
                <img src='/img/image-product2.png' alt="Collection" className={styles.mediaImg}></img>
                <img src='/img/image-product3.png' alt="Collection" className={styles.mediaImg}></img>
                <img src='/img/image-product4.png' alt="Collection" className={styles.mediaImg}></img>
                <img src='/img/image-product5.png' alt="Collection" className={styles.mediaImg}></img>
                <img src='/img/image-product6.png' alt="Collection" className={styles.mediaImg}></img>	
            </div>
            <h2>Or Subscribe To The Newsletter</h2> 
            <div className={styles.mediaButton}>
                <input placeholder='Email Address...' />
                <button className={styles.pageBtn}>Submit</button>
            </div>
        </div>

    );
}