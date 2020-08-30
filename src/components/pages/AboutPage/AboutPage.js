import React from 'react';

import { ABOUT_PAGE_OPTIONS } from '../../../constants/pagesContent';

import styles from './AboutPage.less';

export default function About() {
    const renderPreventRules = () => {
        return (
            <div className={styles.preventRules}>
                {ABOUT_PAGE_OPTIONS.map(option => (
                    <p
                        key={option.id}
                        className={styles.text}
                    >
                        <span className={styles.bullet}>&#x2023; </span>
                        {option.content}
                    </p>
                ))}
            </div>
        )
    };

    return (
        <div className={styles.AboutPage}>
            <div className={styles.header}>
                About
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    Protect yourself and others from the spread COVID-19
                </div>
                {renderPreventRules()}
            </div>
        </div>
    )
}
