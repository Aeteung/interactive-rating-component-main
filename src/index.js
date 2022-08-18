import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import Footer from './components/Footer';
import '../src/sass/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Main></Main>
    <Footer></Footer>
  </React.Fragment>
);
