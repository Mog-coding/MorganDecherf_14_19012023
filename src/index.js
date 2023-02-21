import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer/reducer';
import './index.css';
import Header from './components/Header/Header';

// dynamic import
const Home = lazy(() => import('./pages/Home/Home'));
const CreateEmployee = lazy(() =>
    import('./pages/CreateEmployee/CreateEmployee')
);
const EmployeeList = lazy(() => import('./pages/EmployeeList/EmployeeList'));

const reduxDevtools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, reduxDevtools);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Suspense fallback="Loading">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create" element={<CreateEmployee />} />
                        <Route path="/list" element={<EmployeeList />} />
                    </Routes>
                </Suspense>
            </Router>
        </Provider>
    </React.StrictMode>
);
