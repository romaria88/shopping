import React from 'react';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.main}>
            <h1>Winter sales</h1>
            <h2>Sale 90%</h2>
            <div className={styles.mainImages}>
                <img className={styles.mainImg} src="/img/slide4.jpg" alt="SALE"></img>
                <img className={styles.mainImg} src="/img/slide1.jpg" alt="SALE"></img>
            </div> 
        </div>
    );
}