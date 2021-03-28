import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxstore"
import { Provider } from 'react-redux';

function Foo() {
ReactDOM.render( <Provider store = { store } ><App /></Provider>,document.getElementById('root'));
}
Foo();
export default Foo;
reportWebVitals();