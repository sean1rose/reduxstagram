// COMMENT REDUCER which uses reducer composition

// handle updating of individual comment
function postComments(state = [], action){
	switch(action.type){
		case 'ADD_COMMENT':
			// return the new state (an array of comments) w/ the new comment object tacked on at the end
			// take every item from existing state and apply into new array, and tack on new comment
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			return [
				// from the start up to the comment we want to delete PLUS...
				...state.slice(0, action.index),
				// ...everything after the comment
				...state.slice(action.index + 1)
			]
		default:
			return state;
	}
}

// this is main comments reducer which handles entire comments state...
function comments(state = [], action){
	// check if item is there
	if (typeof action.postId !== 'undefined'){
		console.log('action in main comment reducer - ', action);
		return {
			// take everything from current state
			...state,
			// overwrite this post w/ a new one, so call postComments subreducer
			// BAF_KY4wcrY: ["wow", "cool"] <------ normally take the key (which is the post used to identify), and update w/ the array of comments
			[action.postId]: postComments(state[action.postId], action)
			// ^ subreducer's parameters: 1) want the subpiece comment state of that particular post (which ends up being an array of comments) and 2) the action
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