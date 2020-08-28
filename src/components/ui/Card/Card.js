import React, { Children } from 'react';

import styles from './Card.less';

export default function Card(props) {
    const { title, children } = props;

    return (
        <div className={styles.Card}>
            <div className={styles.title}>{title}</div>
            {children}
        </div>
    )
}