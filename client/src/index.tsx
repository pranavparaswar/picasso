import React from 'react';
import ReactDOM from 'react-dom';

import Index from './views/index';

const App = () => {
    return (
        <Index />
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));