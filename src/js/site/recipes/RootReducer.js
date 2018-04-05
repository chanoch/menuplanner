import { SELECT_RECIPE, selectRecipeReducer } from './redux/SelectRecipe';
import { DESELECT_RECIPE, deselectRecipeReducer } from './redux/DeselectRecipe';
import { LIST_RECIPES, listRecipesReducer, RECEIVE_RECIPES, receiveRecipesReducer } from './redux/ListRecipes';
import { LIST_MENUS, listMenusReducer, RECEIVE_MENUS, receiveMenusReducer } from './redux/ListMenus';
import { CREATE_MENU, createMenuReducer } from './redux/CreateNewMenu';

export function rootReducer(state, action) {
    switch(action.type) {
        case RECEIVE_MENUS: return receiveMenusReducer(state, action);
        case SELECT_RECIPE: return selectRecipeReducer(state, action);
        case DESELECT_RECIPE: return deselectRecipeReducer(state, action);
        case RECEIVE_RECIPES: return receiveRecipesReducer(state, action);
        case CREATE_MENU: return createMenuReducer(state, action);
        default: return state;
    }
}

