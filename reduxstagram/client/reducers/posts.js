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
	console.log('The post will change');
	console.log(state, action);
	return state;
}

export default posts;