import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from '../../ui/Sidebar';

import styles from './MainLayout.less'

function MainLayout(props) {
    const { children } = props;

    return (
        <div className={styles.MainLayout}>
            <Sidebar />
            <div className={styles.childrenWrapper}>{children}</div>
        </div>
    );
}

export default MainLayout;
