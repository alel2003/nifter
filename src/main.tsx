import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/app/index';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
     <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
);
