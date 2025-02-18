import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import  { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer'
import App from './components/App'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

//Need to create a store for redux=> createStore 1.Reducer 2.dev-Tools 


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    )

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>    
    </Provider>,
    document.getElementById('root')
)