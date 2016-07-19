// ROOT REDUCER

/*
- this is imported into the store.js and used to create the store
- include changes in routing as part of the state/reducer! (posts, comments, routing)
- REDUCER ACTUALLY DOES THE EDITING OF STATE!!!
- everytime an action is dispatched -> EVERY single reducer is run
		- whether you choose to act on that action and change the state is up to what you do in the reducer
				- will use the action label and a switch statement to determine whether to act upon it 
*/

import { combineReducers } from 'redux';
// everytime change url, want to update state w/ those changes, so use routerReducer
import { routerReducer } from 'react-router-redux';

// pull in individual reducers
import posts from './posts';
import comments from './comments';

// include changes of urls as part of the state! so use routerReducer
const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;