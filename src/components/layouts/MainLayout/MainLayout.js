import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function MainLayout(props) {
    const { children } = props;

    return (
        <div className='MainLayout'>
            <div className='children'>{children}</div>
        </div>
    );
}

export default MainLayout;
