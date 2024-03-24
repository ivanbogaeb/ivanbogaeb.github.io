import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.css'

import Header from './components/Header';
import Navbar from './components/Navbar';

import Home from './screens/Home2';
import Footer from './components/Footer';
import Work from './screens/Work';
import Strategy from './screens/Strategy';
import Empty from './screens/Empty';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <main id='body-wrapper'>
            <Header/>
            <Navbar/>
            <Home/>
            <Empty/>
            <Footer/>
        </main>
    </React.StrictMode>
)