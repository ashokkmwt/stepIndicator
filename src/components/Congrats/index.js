import React from 'react'
import styles from './index.module.css'
import Done from '../../assets/icons/Done.svg'

export default function Congrats() {
  return ( 
    <div className={styles.Container}>
        <div className={styles.done}>
            <img width='25px' height='25px' src={Done} alt="done" />
        </div>
        <h2>Congratulations, Eren!</h2>
        <p>You have completed onboarding, you can start using the Eden!</p>
        <button className={styles.launchBtn}>Launch Eden</button>
    </div>
  )
}
 