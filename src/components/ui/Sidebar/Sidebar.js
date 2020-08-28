import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { NAV_LINKS } from '../../../constants/navLinks';

import styles from './Sidebar.less';

const cn = classnames.bind(styles);

export default function Sidebar() {
    const renderHeader = () => (
        <div className={styles.header}>
            COVID19 <span>stats</span>
        </div>
    );

    const renderNavLinks = () => {
        const NavLinkCN = cn(styles.navLink, { active: true})

        return (
            <div className={styles.nav}>
                {NAV_LINKS.map(link => (
                    <div
                        key={link.id}
                        className={cn(styles.navLink, {
                            active : link.to === window.location.pathname
                        })}
                    >
                        <Link to={link.to}>{link.content}</Link>
                    </div>
                ))}
            </div>
        )
    };

    return (
        <div className={styles.Sidebar}>
            {renderHeader()}
            {renderNavLinks()}
        </div>
    )
}