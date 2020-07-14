import { combineReducers } from 'redux';


const isFlipped = (state=false, action) => {
    switch(action.type) {
        case 'FLIPPED':
            return { ...state, state: action.payload };
        case 'NOT_FLIPPED':
            return { ...state, state: action.payload };
        default:
            return state;
    }
}


export default combineReducers({
    isFlipped: isFlipped
});