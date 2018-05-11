import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import canvas from './reducers/canvas'

const appReducers = combineReducers({
  canvas
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(
  appReducers,
  /* preloadedState, */
  composeEnhancers(applyMiddleware())
)

export default store
