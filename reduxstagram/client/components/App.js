/*
- ****Using CONNECT, this links the Main Presentational Component and adds all of the state and dispatched action creators for you to use in the Component
- Using mapStateToProps, we can subscribe the component to redux store update of the state
		<- this exposes our data to our component
- Using mapDispatchToProps, we will be able to call action creators in the component, as they are going to be passed in via props
		-> this exposes our action creators to our UI buttons and clicks
- ****The Main Component still eventually gets rendered out, but it will have all of the action creators on it and it will also have the data passed in
*/

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import everything that's exported
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// this will get merged into the component's props, so that the component subscribes to the Redux store updates
function mapStateToProps(state) {
	// return the 2 pieces of state that we need
		// we're going to need 'this.props.posts' and 'this.props.comments'
	return {
		posts: state.posts,
		comments: state.comments
	}
}

// obj is passed in. An obj w/ the same function names, but w/ every AC wrapped into a dispatch call so they may be invoked directly,
	// will be merged into the component's props
function mapDispatchToProps(dispatch){
	// bindActionCreators turns an obj whose values are action creators into an obj w/ the same keys,
		// but w/ every action creator wrapped into a dispatch call so they may be invoked directly
	// use this when you want to pass ACs down to a component that isn't aware of Redux and don't want to pass dispatch/redux store
	return bindActionCreators(actionCreators, dispatch);
};


// CONNECT injects data from our redux store into whatever level component needs it (in this case, our Main Component needs it)
// ***takes our regular Main component and it's going to add all of the data and state and props and action creators***
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App;