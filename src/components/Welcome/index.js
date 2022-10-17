import React from 'react'
import styles from './index.module.css'

export default function Welcome() {
    return (
        <div id='welcome' className={styles.container}>
            <div className={styles.welcomeContainer}>
                <h2>Welcome! First things first...</h2>
                <span className={styles.desc}>You can change them later.</span>
                <div className={styles.fullNameBar}>
                    <span>Full Name</span>
                    <input type="text" placeholder='Steve Jobs' />
                </div>
                <div className={styles.fullNameBar}>
                    <span>Display Name</span>
                    <input type="text" placeholder='Steve' />
                </div>
                <button className={styles.createBtn}>Create Workplace</button>
            </div>
            <div className={styles.section}></div>
        </div>
    ) 
}
