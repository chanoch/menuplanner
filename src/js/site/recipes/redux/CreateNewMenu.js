export const CREATE_MENU = 'CREATE_MENU'; 

export function createNewMenu() {
    return {
        type: CREATE_MENU,
    }
}

export function createMenuReducer(state, action) {
    return {
        ...state,
        menu: action.menu,
        action: CREATE_MENU
    }
}

export function CreateMenuMiddleware() {
    return store => dispatch => action => {
        if(action.type === CREATE_MENU) {
            action.menu = {selected: []};
        }
        dispatch(action);
    }
}
