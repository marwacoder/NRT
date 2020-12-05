import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



import isAuthenticated from '../reducers/authReducer';

const persistConfiq = {
  key: 'root',
  storage,
  whitelist: ['']
}


 const reducers = {
    isAuthenticated
};


const rootReducer = combineReducers({
  ...reducers,
});


export default persistReducer(persistConfiq, rootReducer)
