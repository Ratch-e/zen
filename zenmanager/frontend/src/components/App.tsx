import * as React from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import { Header } from './layout/header/Header';
import { Dashboard } from './leads/Dashboard';

const App = () => (
    <Provider store={store}>
        <>
            <Header />
            <Dashboard />
        </>
    </Provider>
);

export default App;
