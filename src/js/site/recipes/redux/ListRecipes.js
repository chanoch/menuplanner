import {fetchRecipes} from '../service/recipes';

export const LIST_RECIPES = "LIST_RECIPES";
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const LIST_RECIPES_FAILED = 'LIST_RECIPES_FAILED';

import {history} from '../../../components/SimpleReactRouter';

/** 
 * Async mutating middleware that loads the full list of recipes and then dispatches an action to render
 * them 
 */
export function ListRecipesMiddleware() {
    return store => dispatch => action => {
        dispatch(action);
        if(action.type===LIST_RECIPES) {
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

export function listRecipes() {
    return {
        type: LIST_RECIPES,
    }
}

export function receiveRecipes(recipes) {
    return {
        type: RECEIVE_RECIPES,
        recipes,
        receivedAt: Date.now()
    }
}

export function receiveRecipesReducer(state, action) {
    return {
        ...state,
        action: RECEIVE_RECIPES,
        recipes: action.recipes,
    }
}
