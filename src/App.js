import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import { ROUTES } from './constants/routes';

import MainLayout from './components/layouts/MainLayout';
import GlobalStatsPage from './components/pages/GlobalStatsPage';
import LiveStatsPage from './components/pages/LiveStatsPage';
import AboutPage from './components/pages/AboutPage';

import './App.less';

export default function App() {
    const { global, live, about } = ROUTES;

    return (
        <Router>
            <MainLayout>
            <Switch>
                <Route path={global} component={GlobalStatsPage} />
                <Route path={live} component={LiveStatsPage} />
                <Route path={about} component={AboutPage} />
                <Redirect path='/' to={global} />
               </Switch>
            </MainLayout>
        </Router>
    )
}
