import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

import { LanguageEnum } from './i18n/i18n-types';

// components 
import App from './App';
import Language from './i18n/Language';

// redirect to route with language 
const RequireAuth: Function = ({ children }: { children: ReactNode }) => {
    const loca = useLocation()
    let langPath = loca.pathname.split("/")
    let langArrs = Object.values(LanguageEnum)
    return langArrs.indexOf(langPath[1]) === -1 ? <Navigate to={`/${LanguageEnum.ZH_CN}` + loca.pathname} replace /> : children;
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<RequireAuth><App /></RequireAuth>}>
                <Route path=":lang/" element={<Language />}></Route>
            </Route>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
