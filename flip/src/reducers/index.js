import { combineReducers } from 'redux';


const isFlipped = (state=false, action) => {
    switch(action.type) {
        case 'FLIPPED':
            return { ...state, isFlipped: action.payload };
        case 'NOT_FLIPPED':
            return { ...state, isFlipped: action.payload };
        default:
            return state;
    }
}


export default combineReducers({
    isFlipped: isFlipped
});