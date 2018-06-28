import { DEFAULT_PAGE, CHANGE_TITLE } from '../action';

export default function title(state = DEFAULT_PAGE, action) {
    switch (action.type) {
        case CHANGE_TITLE: return action.title;
        default: return state;
    }
}