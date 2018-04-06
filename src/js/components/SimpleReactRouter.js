import ReactDOM from 'react-dom';
import toRegex from 'path-to-regexp';
import createHistory from 'history/createBrowserHistory';
import {createStore, applyMiddleware} from 'redux';

// singleton
export const history = createHistory();

export class SimpleReactRouter {

    constructor(rootReducer, initialState, enhancers, routes) {
        this.routes = routes;
        this.store = createStore(rootReducer, initialState, applyMiddleware(...enhancers));
        this.matchURI = this.matchURI.bind(this);
        this.resolve = this.resolve.bind(this);
        this.renderComponent = this.renderComponent.bind(this);
        this.dispatch = this.dispatch.bind(this);
        this.render = this.render.bind(this);
        this.render(history.location);
        history.listen(this.render);
    }

    matchURI(path, uri) {
        const keys = [];
        const pattern = toRegex(path, keys); // TODO: Use caching
        const match = pattern.exec(uri);
        if (!match) return null;
        const params = Object.create(null);
        for (let i = 1; i < match.length; i++) {
            params[keys[i-1].name] =
            match[i] !== undefined ? match[i] : undefined;
        }
        return params;
    }

    async resolve(context) {
        for (const route of this.routes) {
            const uri = context.error ? '/error' : context.pathname;
            const params = this.matchURI(route.path, uri);
            if (!params) continue;
            const result = await route.action(this.store);
            if (result) return result;
        }
        const error = new Error(`Route ${context.error} not found`);
        error.status = 404;
        throw error;
    }

    renderComponent(component) {
        ReactDOM.render(component, document.getElementById('root'));
    }

    dispatch(action) {
        this.store.dispatch(action);
    }

    render(location) {
        this.resolve(location)
            .then(this.renderComponent)
            .catch(error =>
                this.resolve({location, error})
                    .then(this.renderComponent));
    }
}

