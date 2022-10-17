import React from 'react'
import styles from './index.module.css'
 
export default function WorkSpace() {
    return (
        <div id='workspace' className={styles.container}>
            <div className={styles.welcomeContainer}>
                <h2>Let's set up a home for all your work</h2>
                <span className={styles.desc}>You can always create another workspace later.</span>
                <div className={styles.fullNameBar}>
                    <span>Workspace Name</span>
                    <input type="text" placeholder='Eden' />
                </div>
                <div className={styles.fullNameBar}>
                    <span>Workspace URL (optional)</span>
                    <div className={styles.inputBar}>
                        <input type="text" placeholder='www.eden.com/' />
                        <div className={styles.example}><span>Example</span></div>
                    </div>
                </div>
                <button className={styles.createBtn}>Create Workplace</button>
            </div>
            <div className={styles.section}></div>
        </div>
    )
}
