import React from 'react';
import styles from './Page1.module.css';

export default function Page1() {
    return (
        <div className={styles.page1}>
            <div className={styles.page1Image}>
                <img className={styles.page1Img} src="/img/brand-1.png" alt="brand-1"></img>
                <img className={styles.page1Img} src="/img/brand-2.png" alt="brand-2"></img>
                <img className={styles.page1Img} src="/img/brand-3.png" alt="brand-3"></img>
                <img className={styles.page1Img} src="/img/brand-4.png" alt="brand-4"></img>
                <img className={styles.page1Img} src="/img/brand-5.png" alt="brand-5"></img>
            </div>
            <div className={styles.page1Col}>
                <h3>Explore new and popular styles</h3>
                <div className={styles.page1ColMain}>
                    <div className={styles.page1ColLeft}>
                        <img className={styles.page1ColImg1} src="/img/item-category1.png" alt="item1"></img>
                    </div>
                    <div className={styles.page1ColRight}>
                        <div className={styles.page1Col1}> 
                            <img className={styles.page1ColImg} src="/img/item-category2.png" alt="item"></img>
                            <img className={styles.page1ColImg} src="/img/item-category4.png" alt="item"></img>
                        </div>
                        <div className={styles.page1Col2}>
                            <img className={styles.page1ColImg} src="/img/item-category3.png" alt="item"></img>
                            <img className={styles.page1ColImg} src="/img/item-category5.png" alt="item"></img> 
                        </div>   
                    </div>
                </div> 
            </div>
        </div>
    );
};