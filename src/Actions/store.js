import { createStoreHook, combineReducers } from 'redux';
import cartReducer from './Reducers/cartReducer';
import { createStoreHook } from 'react-redux';

const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStoreHook(rootReducer);

export default store;