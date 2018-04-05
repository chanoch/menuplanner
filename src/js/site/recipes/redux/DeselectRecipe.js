import {moveElement} from './Utils';

export const DESELECT_RECIPE = 'DESELECT_RECIPE';

export function deselectRecipe(key) {
    return {
        type: DESELECT_RECIPE,
        key
    }
}

/**
 * Show the updated recipes and selected lists once the recipe was moved between them
 * 
 * @param {Object} state - unused
 * @param {Object} action - containing a .key property to identify the object
 */
export function deselectRecipeReducer(state, action) {
    return {
        ...state,
        action: DESELECT_RECIPE,
        menu: {
            selected: action.selected
        },
        recipes: action.recipes,
    }
}

export function DeselectRecipeMiddleware() {
    return store => despatch => action => {
        if(action.type === DESELECT_RECIPE) {
            const state = store.getState();
            const updated = moveElement(action.key, state.menu.selected, state.recipes);
            action.selected = updated.source;
            action.recipes = updated.target;
        }
        despatch(action);
    }
}
