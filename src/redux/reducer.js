import { combineReducers } from 'redux';

import collapsed from './reducers/collapsed';
import title from './reducers/title';

const reducer = combineReducers({
    collapsed,
    title
});
export default reducer;