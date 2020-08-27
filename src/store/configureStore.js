import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducers from '../reducers';

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer    : reducers,
        middleware : [...getDefaultMiddleware()],
        devTools   : process.env.NODE_ENV !== 'production',
        preloadedState
    });

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
