
// import React from "react";
// import ReactDom from 'react-dom';

// import App from './App';
// // ReactDom.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app
root.render(<App />);
