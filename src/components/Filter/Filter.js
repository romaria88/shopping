import React from 'react';

import styles from './Filter.module.css';


export default function Filter() {
  return (
    <>
      
      <select className={styles.filter}>
        <option value="">Category</option>
        <option value="All">All</option>
        <option value="Men's clothing">Men's clothing</option>
        <option value="Women's clothing">Women's clothing</option>
        <option value="Jewelery">Jewelery</option>
        <option value="Electronic">Electronic</option>
      </select>
    </>
  );
}