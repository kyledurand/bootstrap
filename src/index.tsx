import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Frame} from './components/Frame/';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Frame />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
