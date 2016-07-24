import { createStore, compose } from 'redux';

// used to help keep track of url state so that it is in sync w/ the redux store (this becomes useful for time traveling and recording and replaying user actions)
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for default data (ES6)
const defaultState = {
	posts,
	comments
};

// create the store
const store = createStore(rootReducer, defaultState);

// syncHistorWithStore (https://github.com/reactjs/react-router-redux)
// 'history' is the enhanced history, which first passes users new url location thru the redux store and then onto React Router to update the component tree
// this is going to be used as the history prop on the <Router> tag in reduxstagram.js
export const history = syncHistoryWithStore(browserHistory, store);

// So can hot-reload reducer files (accept hot reload and re-require the reducer)...
if(module.hot){
	module.hot.accept('./reducers/',() => {
		// re-require and swap out module using commonjs require cuz can't call es6 import from w/in a function
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	})
}


export default store;