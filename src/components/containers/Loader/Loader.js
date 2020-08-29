import React from 'react';
import classnames from 'classnames/bind';

import styles from './Loader.less';

const cn = classnames.bind(styles);

const Loader = props => {
    const { width, height, isLoading } = props;
    const LoaderCN = cn('Loader', { show: isLoading });

    return (
        <div className={LoaderCN}>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#FFFFFF" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </div>
    );
};

export default Loader;
