// COMMENT REDUCER

function postComments(state = [], action){
	switch(action.type){
		case 'ADD_COMMENT':
			// return the new state w/ the new comment
			// take every item from existing state and apply into new array, then tack on new comment
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			
		default:
			return state;
	}
}

function comments(state = [], action){
	if (typeof action.postId !== 'undefined'){
		return {
			// take current state
			...state,
			// overwrite this post w/ a new one
			// BAF_KY4wcrY: ["wow", "cool"]
			[action.postId]: postComments(state[action.postId], action)
			// ^ want to pass it sub-piece of state (reducer composition)
		}
	}
	return state;
	// switch(action.type){
	// 	case 'ADD_COMMENT':
	// 		console.log('in reducer add comment');
	// 	default:
	// 		return state;
	// }
}

export default comments;