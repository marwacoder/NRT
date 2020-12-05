import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {  persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './reducers/rootReducer'

const middleWares = [thunk,logger]

const store =  createStore(
    rootReducer,
    {},
    compose(applyMiddleware(...middleWares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)


 //const store =  createStore(rootReducer, applyMiddleware(...middleWares))

 const persistore = persistStore(store)

export  { store, persistore };
