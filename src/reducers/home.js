import {FETCH_HOME,ADD_HOME } from '../actions/types'

const initialState = {
    home:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case FETCH_HOME:
            return {
                ...state,
                home:action.payload
            }
        case ADD_HOME:
            return {
                ...state,
                home:[action.payload,...state.home]
            }
        default:
            return state
    }
}