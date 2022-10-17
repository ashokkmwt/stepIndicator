import React from 'react'
import styles from './index.module.css'
import Eden from '../../assets/icons/eden.png'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use';

export default function Header() {

    const [activeTab, setActiveTab] = useLocalStorage("tabname", "welcome")

    const steps = [
        {
            name: "welcome",
            value: 1
        },
        {
            name: "workspace",
            value: 2
        },
        {
            name: "planning",
            value: 3
        },
        {
            name: "congrats",
            value: 4
        }
    ]

    const navigate = useNavigate();

    const visit = (name) => {
        if (name === "welcome") {
            navigate(`/`);
            setActiveTab(name);
        } else {
            navigate(`/${name}`);
            setActiveTab(name);
        }
    }

    return (
        <header>
            <div className={styles.topBar}>
                <div className={styles.eden}>
                    <img width="100%" height="100%" src={Eden} alt="eden" />
                </div>
                <h2>Eden</h2>
            </div>
            <div className={styles.stepBar}>

                {steps.map((step, index) => {
                    return (
                        <div
                            style={{ backgroundColor: activeTab === step.name && "blue" }}
                            key={index} onClick={() => visit(step.name)}
                            className={styles.circle}>
                            <span style={{ color: activeTab === step.name && "white" }}>{step.value}</span>
                        </div>
                    )
                })}
            </div>
        </header>
    )
}
