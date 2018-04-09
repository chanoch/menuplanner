import MenuService from '../service/menus';

export const ARCHIVE_MENU = 'ARCHIVE_MENU';
export const MENU_ARCHIVED = 'MENU_ARCHIVED';
export const ARCHIVE_MENU_FAILED = 'ARCHIVE_MENU_FAILED';

const menuService = new MenuService();

/** 
 * TODO - handle errors (return 500? 302!>)
 */
export function ArchiveMenuMiddleware() {
    return store => dispatch => action => {
        dispatch(action);
        if(action.type===ARCHIVE_MENU) {
            const amenu = action.menu;

            const menus = store.getState().menus.filter(menu => amenu.key!==menu.key);
            menuService.setMenuArchived(amenu, () => dispatch(updateMenusList(menus)));
        }
    }
}

/** 
 * TODO Implement the reducer
 */
export function archiveMenuFailed() {
    return {
        type: ARCHIVE_MENU_FAILED
    }
}

export function archiveMenu(key) {
    return {
        type: ARCHIVE_MENU,
        menu: {key},
        archivedAt: Date.now()
    }
}

export function updateMenusList(menus) {
    return {
        type: MENU_ARCHIVED,
        menus,
        updatedAt: Date.now()
    }
}

export function menuArchivedReducer(state, action) {
    return {
        ...state,
        action: MENU_ARCHIVED,
        menus: action.menus,
    }
}
