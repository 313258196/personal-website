import './App.css';
import { GlobalStyle } from './style';
import './styles/index.scss';
import {
    BrowserRouter as Router,
    Outlet
} from 'react-router-dom'

// basename='/jobfairViewscreen'
const App = () => {
    return (
        <div className='App'>
            <GlobalStyle />
            <Outlet />
        </div>
    );
};

export default App;
