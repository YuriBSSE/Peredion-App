import {combineReducers,compose,createStore,applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import authRed from "./reducers/authRed/authRed";


const reducers = combineReducers({
    authRed
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,{},composeEnhancers(applyMiddleware(ReduxThunk)));


export default store