/*
- *** actions are dispatched when user clicks a button, etc. (so we will wire up the actions to the UI)***
- *** actions contain info about WHAT HAPPENED (think of them as events) ***
- actions don't update the state (reducers on the receiving end of the action will update the state - think of reducers as the event listeners)
- action creator returns an obj 
- the action is the obj w/ 3 parts
- 2 parts to an action - 1) type label + 2) payload
- how do we handle the action? to update the store... -> reducers
- everytime an action is dispatched -> EVERY single reducer is run
*/


// increment like action
export function increment(index){
	// index -> indentifier for which post is getting its like incremented
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment
export function addComment(postId, author, comment){
	console.log('dispatching addComment --', postId, author, comment);
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// remove comment
export function removeComment(postId, index){
	// postID - what post should we remove the comment from
	// index - what comment we need to remove
	return {
		type: 'REMOVE_COMMENT',
		postId,
		index
	}
}