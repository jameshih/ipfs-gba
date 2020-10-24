import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import store from './store';
import './styles/build/index.css';
import LoadingSpinner from './components/core/LoadingSpinner';
import { Header, Footer } from './components/layout';
import { UseWalletProvider } from 'use-wallet';
const Home = lazy(() => import('./components/pages/Home'));

function Root() {
    return (
        <UseWalletProvider chainId={4} connectors={{}}>
            <Provider store={store}>
                <Header />
                <Suspense fallback={<LoadingSpinner />}>
                    <Home />
                </Suspense>
                <Footer />
            </Provider>
        </UseWalletProvider>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
