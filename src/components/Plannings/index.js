import React from 'react'
import styles from './index.module.css'
import Person from '../../assets/icons/person.svg'
import Group from '../../assets/icons/group.svg'

export default function Plannings() {
    return ( 
        <div id='planning' className={styles.container}>
            <div className={styles.welcomeContainer}>
                <h2>How are your planning to use Eden?</h2>
                <span className={styles.desc}>We'll streamline your setup experience accordingly.</span>
                <div className={styles.options}>

                    <div className={styles.myContainer}>
                        <div className={styles.image}>
                            <img width="100%" height="100%" src={Person} alt="person" />
                        </div>
                        <h5>For myself</h5>
                        <p>Write better. Think more clearly.Stay organized.</p>
                    </div>

                    <div className={styles.teamContainer}>
                        <div className={styles.image}>
                            <img width="100%" height="100%" src={Group} alt="group" />
                        </div>
                        <h5>With my team</h5>
                        <p>Wikis, docs, tasks & projects, all in one place.</p>
                    </div>
                </div>
                <button className={styles.createBtn}>Create Workplace</button>
            </div>
            <div className={styles.section}></div>
        </div>
    )
}
