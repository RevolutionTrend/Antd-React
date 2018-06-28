import { SET_COLLAPSED } from '../action';

export default function collapsed(state = false, action) {
    switch (action.type) {
        case SET_COLLAPSED: return action.collapsed;
        default: return state;
    }
}