import React from 'react';

import styles from './stockList.module.css';

const StockList=({stocks}) => {
    return(
    <div className={styles.container}>
        <div className={styles.header}>
        <h2>Product Categories</h2>
        </div>

        <div className={styles.listHeaders}>
            <div className={styles.nameHeader}>Name</div>
            <div className={styles.tickerHeader}>Ticker</div>
            <div className={styles.askHeader}>Ask</div>
            <div className={styles.bidHeader}>Bid</div>
        </div>
        <ul className={styles.StockList}>

        </ul>
    </div>
    );
};

export default StockList;