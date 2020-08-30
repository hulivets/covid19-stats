import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Card.less';

const cn = classnames.bind(styles);

export default function Card(props) {
    const { title, children, className } = props;
    const CardCN = cn(styles.Card, {
        [className] : className
    })

    return (
        <div className={CardCN}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

Card.propTypes = {
    title     : PropTypes.string,
    children  : PropTypes.node,
    className : PropTypes.string
};

Card.defaultProps = {
    title     : '',
    children  : null,
    className : ''
}