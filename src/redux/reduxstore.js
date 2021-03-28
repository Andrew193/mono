import { combineReducers, createStore,applyMiddleware } from "redux"
import playerReducer from "./playersReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
const reducers=combineReducers({
    players:playerReducer
})
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));