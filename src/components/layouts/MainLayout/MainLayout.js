import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { COUNTRIES_KEY } from '../../../constants/keys';
import { fetchCountries } from '../../../actions/countries';

import Sidebar from '../../ui/Sidebar';

import styles from './MainLayout.less'

function MainLayout(props) {
    const { children } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionStorage[COUNTRIES_KEY]) return;

        dispatch(fetchCountries());
    }, []);

    return (
        <div className={styles.MainLayout}>
            <Sidebar />
            <div className={styles.childrenWrapper}>{children}</div>
        </div>
    );
}

export default MainLayout;
