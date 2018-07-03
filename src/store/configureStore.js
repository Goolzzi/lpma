import { compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducer'

const logger = createLogger({
    collapsed: true
})

const composedStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(logger),
)(createStore)

const configureStore = (initialState) => {
    return composedStore(reducer, initialState)
}


export default configureStore