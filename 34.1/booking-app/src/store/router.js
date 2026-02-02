import {createBrowserHistory} from 'history';
import {createReduxHistoryContext} from 'redux-first-history';

const {
    createReduxHistory, routerMiddleware, routerReducer,
} = createReduxHistoryContext({
    history: createBrowserHistory(),
});

export const reduxRouterMiddleware = routerMiddleware;
export const routerHistory = createReduxHistory;
export {routerReducer};
