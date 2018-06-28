export const DEFAULT_PAGE = 'Dashboard';
export const SET_COLLAPSED = 'SET_COLLAPSED';
export const CHANGE_TITLE = 'CHANGE_TITLE';

export function setCollapsed(collapsed) {
    return {
        type: SET_COLLAPSED,
        collapsed
    };
}

export function changeTitle(title) {
    return {
        type: CHANGE_TITLE,
        title
    };
}