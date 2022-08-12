import './App.css';
import { GlobalStyle } from './style';
import Index from './pages';
import Test from './pages/test/Test';
import './styles/index.scss';
import Language from './i18n/Language';
import NotFound from './pages/notFound/NotFound';
import {
    Route, Routes, Navigate,
    BrowserRouter as Router,
    // HashRouter as Router,
    Link, Outlet, useRoutes,
    useLocation
} from 'react-router-dom'
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        console.log("App...")
    })
    return (
        <Language>
            <Routes>
                <Route exact={ true } path="/" element={<Index />}>
                    <Route path=":lang/" >
                        {/* 子路由 配合<Outlet />使用
                        <Route path="test" element={<Test />}></Route> */}
                    </Route>
                </Route>
            </Routes>
        </Language>
    )
};

// basename='/jobfairViewscreen'
const AppWrapper = () => {
    useEffect(() => {
        console.log("AppWrapper...")
    })
    return (
        <div className='App'>
            <GlobalStyle />
            <Router>
                <App />
            </Router>
        </div>
    );
};

export default AppWrapper;
