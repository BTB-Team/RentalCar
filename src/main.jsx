import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';

// تنظیم جهت پیش‌فرض سیستم روی راست‌چین (RTL) در اولین لود
document.documentElement.setAttribute('dir', 'rtl');
document.documentElement.setAttribute('lang', 'fa');

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
