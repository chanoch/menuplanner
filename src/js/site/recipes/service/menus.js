import axios from 'axios';

export default class MenuService {
    fetchMenus(next) {
        axios.get('http://localhost/menuplanner/api/v1/menu')
            .then(response => next(response.data));
    }
    
    fetchOpenMenus(next) {
        axios.get('http://localhost/menuplanner/api/v1/menu/open')
            .then(response => next(response.data));
    }
    
    setMenuArchived(menu, next) {
        axios.post(`http://localhost/menuplanner/api/v1/menu/${menu.key}/archive`)
            .then(response => next(response.data));
    }
}
