import axios from 'axios';

export function fetchMenus(next) {
    axios.get('http://localhost/menuplanner/api/v1/menus')
        .then(response => next(response.data));
}