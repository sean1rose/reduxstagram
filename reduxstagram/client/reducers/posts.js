// POST REDUCER

/*
- want a reducer for each piece of state
- reducer takes in 2 things and returns new updated state:
	- 1. the ACTION (info about what happened)
	- 2. a copy of the CURRENT STATE
	-> will return an updated copy of the new state/store
- everytime an action is dispatched -> EVERY single reducer is run
		- whether you choose to act on that action and change the state is up to what you do in the reducer
				- will use the action label and a switch statement to determine whether to act upon it 
*/

// reducer function for a user POST piece of data
// use ES6 default paramter to set state as empty array (state is not going to be anything upon initial load)
function posts(state = [], action){
	switch(action.type){
		case 'INCREMENT_LIKES':
		// return the updated state
		console.log('increment likes');
		const i = action.index;
		return [
			// instead of using array.concat to return a new array, using ES6 spread (similar to using Object.assign)
			// takes in state, takes everything before and after, and updates the 1 post that we actually want
			...state.slice(0,i), 														// take everything up (before) to the one we are updating
			{...state[i], likes: state[i].likes + 1}, 			// object spread
			...state.slice(i + 1), 													// after the one we are updating
		]
		default:
			// if not acting on it, just return default state w/ no changes
			return state;
	}
}

export default posts;