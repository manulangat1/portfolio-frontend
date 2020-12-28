import {FETCH_ABOUT } from '../actions/types'

const initialState = {
    about:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case FETCH_ABOUT:
            return {
                ...state,
                about:action.payload
            }
        default:
            return state
    }
}