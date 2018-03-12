import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
