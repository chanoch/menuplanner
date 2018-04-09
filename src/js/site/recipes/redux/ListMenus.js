import {fetchMenus, fetchOpenMenus} from '../service/menus';

export const LIST_MENUS = 'LIST_MENUS';
export const LIST_OPEN_MENUS = 'LIST_OPEN_MENUS';
export const RECEIVE_MENUS = 'RECEIVE_MENUS';
export const LIST_MENUS_FAILED = 'LIST_MENUS_FAILED';

/** 
 * Async mutating middleware that 
 * loads the list of open menus and then 
 * dispatches an action to render them 
 */
export function ListOpenMenusMiddleware() {
    return store => dispatch => action => {
        dispatch(action);
        if(action.key===LIST_MENUS) {
            fetchOpenMenus(menus => dispatch(receiveMenus(menus)));
        }
    }
}

/** 
 * Async mutating middleware that 
 * loads the list of menus and then 
 * dispatches an action to render them 
 */
export function ListMenusMiddleware() {
    return store => dispatch => action => {
        dispatch(action);
        if(action.key===LIST_MENUS) {
            fetchMenus(menus => dispatch(receiveMenus(menus)));
        }
    }
}

/** 
 * TODO Implement the reducer
 */
export function listMenusFailed() {
    return {
        type: LIST_MENUS_FAILED
    }
}

export function receiveMenus(menus) {
    return {
        type: RECEIVE_MENUS,
        menus,
        receivedAt: Date.now()
    }
}

export function receiveMenusReducer(state, action) {
    return {
        ...state,
        action: RECEIVE_MENUS,
        menus: action.menus,
    }
}
