import './App.css';
import { GlobalStyle } from './style';
import Index from './pages';
import './styles/index.scss';
import Language from './i18n/Language';
import NotFound from './pages/notFound/NotFound';
// router 
import {
    Route, Routes, Navigate,
    BrowserRouter as Router,
    // HashRouter as Router,
    Link, Outlet, useRoutes
} from 'react-router-dom'

const App = () => {
    const routes = useRoutes([
        { path: '/', element: <Index /> },
        { path: '*', element: <NotFound /> },
    ]);

    return <Language>{routes}</Language>
};

const AppWrapper = () => {
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
