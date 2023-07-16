import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import "./app.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

// ReactDOM.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


