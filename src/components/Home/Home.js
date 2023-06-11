import React from 'react';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.mainLeft}>
                <h1>Collections</h1>
                <p>You can explore ans shop many differnt collection</p>
                <p>From various barands here</p>
                <button className={styles.mainButton}>Buy now</button>
            </div>
            <div className={styles.mainRight}>
                <img className={styles.mainImg} src="/img/Group 4.png" alt="Collection"></img>
            </div>
        </div>
    );
}
