import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.less';

export default function Card(props) {
    const { title, children } = props;

    return (
        <div className={styles.Card}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

Card.propTypes = {
    title    : PropTypes.string,
    children : PropTypes.node
};

Card.defaultProps = {
    title    : '',
    children : null
}