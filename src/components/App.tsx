import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Routes from './Routes';

function App(): ReactElement {

    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes />
                </Layout>
            </BrowserRouter>
        </>
    );

}

export default App;
