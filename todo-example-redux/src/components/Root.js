import React from 'react'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import TodoApp from './App'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={TodoApp} />
                <Route path="/:filter" component={TodoApp} />
            </Switch>
        </Router>
    </Provider>
)

export default Root