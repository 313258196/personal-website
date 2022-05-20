import './App.css';
import TestChangeI18n from './components/TestChangeI18n';
import { GlobalStyle } from './style';
import Index from './pages';
import './styles/index.scss';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <div className="App">
                <Index />
            </div>
        </>
    );
}

export default App;
