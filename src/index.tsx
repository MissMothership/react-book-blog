import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
// import reportWebVitals from './reportWebVitals';
//Server for the Fake Backend
const render = () => {
    ReactDOM.render(
        <StrictMode>
            <App />
        </StrictMode>,
        document.getElementById('root'),
    );
};

if (process.env.NODE_ENV === 'development') {
    import('./mocks/browser').then(({ worker }) => {
        worker.start(
            {
                serviceWorker: {
                    url: '/mockServiceWorker.js',
                },
            }
        );
        render();
    });
} else {
    render();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
