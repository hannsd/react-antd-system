import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './router/router';
import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Routers />
            </HashRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
