import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer/reducer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
// import reportWebVitals from './reportWebVitals';

const reduxDevtools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, reduxDevtools);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<React.StrictMode>
    <Provider store={store}>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateEmployee />} />
                <Route path="/list" element={<EmployeeList />} />
            </Routes>
        </Router>
    </Provider>
    //</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
