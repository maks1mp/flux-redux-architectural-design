import React from 'react';
import ReactDOM from 'react-dom';

import FluxApp from './flux';
import ReduxApp from './redux';

ReactDOM.render(<FluxApp/>, document.getElementById('flux'));
ReactDOM.render(<ReduxApp/>, document.getElementById('redux'));
