import { legacy_createStore as createStore } from "redux"
import { reducer  } from "./reducer.js"


//Action Types


//Actions / Action Creators

// Reducers

const initState = {
    counter:0,
    todo:[]
}
export const store = createStore(reducer,initState)







