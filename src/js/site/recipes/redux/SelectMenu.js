import {fetchRecipes} from '../service/recipes';

export const SELECT_MENU = "SELECT_MENU";
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const LIST_RECIPES_FAILED = 'LIST_RECIPES_FAILED';

import {history} from '../../../components/SimpleReactRouter';

/** 
 * Async mutating middleware that loads the full list of recipes and then dispatches an action to render
 * them 
 */
export function SelectMenuMiddleware() {
    return store => dispatch => action => {
        dispatch(action);
        if(action.type===SELECT_MENU) {
            fetchRecipes(recipes => dispatch(receiveRecipes(recipes)));
            history.push('/menuplanner/selectmenu.html');
        }
    }
}

/** 
 * TODO Implement the reducer
 */
export function listRecipeFailed() {
    return {
        type: LIST_RECIPES_FAILED
    }
}

export function selectmenu() {
    return {
        type: SELECT_MENU,
    }
}

export function receiveRecipes(recipes) {
    return {
        type: RECEIVE_RECIPES,
        recipes,
        receivedAt: Date.now()
    }
}

export function selectMenuReducer(state, action) {
    return {
        ...state,
        action: SELECT_MENU,
        recipes: action.recipes,
    }
}
