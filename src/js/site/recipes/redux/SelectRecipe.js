import {moveElement} from './Utils';

export const SELECT_RECIPE = 'SELECT_RECIPE'; 

export function selectRecipe(key) {
    return {
        type: SELECT_RECIPE,
        key
    }
}

/**
 * Select a recipe and move it from the .recipes array to the .selected array of 
 * recipes
 * 
 * @param {Object} state - not used
 * @param {Object} action - containing a .key property to identify the object
 */
export function selectRecipeReducer(state, action) {
    return {
        ...state,
        action: SELECT_RECIPE,
        menu: {
            selected: action.selected,
        },
        recipes: action.recipes,
    }
}

/** 
 * If action is select recipe, move recipe from recipes list to selected list.
*/
export function SelectRecipeMiddleware() {
    return store => dispatch => action => {
        const state = store.getState();
        if(action.type === SELECT_RECIPE) {
            const updated = moveElement(action.key, state.recipes, state.menu.selected);
            action.recipes = updated.source;
            action.selected = updated.target;    
        }
        dispatch(action);
    }
}
