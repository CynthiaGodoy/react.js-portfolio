import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
// import { BrowserRouter } from "react-router-dom"
import { HashRouter } from "react-router-dom"

//THIS WORKED ON LOCAL HOST BUT NOT GH-PAGES THIS CREATED A WHITE SCREEN
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<HashRouter>
<App />
</HashRouter>
);

//THIS DIDN'T WORK AND CREATED A WHITE SCREEN
// ReactDOM.render(
//   <React.StrictMode>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );