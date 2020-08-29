import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { COUNTRIES_KEY } from '../../../constants/keys';
import { fetchCountries } from '../../../actions/countries';
import { getIsLoading } from '../../../selectors/view';

import Sidebar from '../../ui/Sidebar';
import Loader from '../../containers/Loader';

import styles from './MainLayout.less'

function MainLayout(props) {
    const { children } = props;
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        if (sessionStorage[COUNTRIES_KEY]) return;

        dispatch(fetchCountries());
    }, []);

    return (
        <div className={styles.MainLayout}>
            <Sidebar />
            <div className={styles.childrenWrapper}>{children}</div>
            <Loader isLoading={isLoading} width={50} height={50} />
        </div>
    );
}

export default MainLayout;
