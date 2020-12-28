import { FETCH_PROJECTS, ADD_PROJECTS } from '../actions/types';


const intialState={
    projects:[]
}

export default function(state=intialState,action){
    switch(action.type){
        case FETCH_PROJECTS:
            return{
                ...state,
                projects:action.payload
            }
        case ADD_PROJECTS:
            return{
                ...state,
                projects:[action.payload,...state.projects]
            }
        default:
            return state
    }
}