import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { COUNTRIES_KEY } from '../../../constants/keys';
import { fetchCountries } from '../../../actions/countries';
import { getIsLoading } from '../../../selectors/view';
import PropTypes from 'prop-types';

import Sidebar from '../../ui/Sidebar';
import Loader from '../../containers/Loader';

import styles from './MainLayout.less'

export default function MainLayout(props) {
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
            <Loader isLoading={isLoading} />
        </div>
    );
}

MainLayout.propTypes = {
    children : PropTypes.element.isRequired
};
