require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
const appName = 'IAAS';

createInertiaApp({
    title: (title) => `${title} - IAAS`,
    resolve: (name) =>
        import(`./Pages/${name}`)
    ,
    setup({ el, App, props }) {
        return render(
            <Provider store={Store}>
                <App {...props}  />
            </Provider>
            , el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
