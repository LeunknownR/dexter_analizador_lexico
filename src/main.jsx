import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./normalize.css";
import "./customize.css";
import "./index.css";

import './fonts/Roboto-Black.ttf';
import './fonts/Roboto-Bold.ttf';
import './fonts/Roboto-Light.ttf';
import './fonts/Roboto-Medium.ttf';
import './fonts/Roboto-Regular.ttf';
import './fonts/Roboto-Thin.ttf';
import './fonts/Fira-Code-Regular.ttf';

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,
)
