/* 		***THIS FILE IS OUR POINT OF ENTRY / MAIN APP FILE***
-want react-router to pass in Photo-Grid.js or Single as this.props.children to Main Component
-render router out to the page, then it dictates which components to render
-REACT-ROUTER -> instead of rendering out Main then, we need to build out a router component
		-Router component needs a history obj that allows us to utilize push state (changing urls w/o having to reload page)
		-w/in the router component just write out all the different routes that match (Main, )
		-at the very top level ('/'), use Main Component
		-we're always going to be using Main component, the only thing that'll change is child
				- so we'll nest the child components w/in Main
				- IndexRoute -> if just '/' route -> want it to be the PhotoGrid
				- otherwise use nested route :postId, which uses Single component
		-so we're passing either Main-PhotoGrid or Main-Single
		-Photogrid and Single are children, remember that we passed in {React.cloneElement} w/ this.props in the MainComponent to establish that
	-VID 8: need to update router so that it knows about our store
-PROVIDER: allows us to bind redux w/ react
	-<Provider> tag exposes our store to our app (accessed via the store prop on the tag)
	**VID 10: Instead of using Main component, we sub in App, which connects redux store and action creators to the Main component
*/

import React from 'react';
// render method, allows us to render out to html
import { render } from 'react-dom';
// import css
import css from './styles/style.styl'
// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
// import react-router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// binding that allows us to use redux w/ react
import { Provider } from 'react-redux';
// 'store' is a default export whereas 'history' is in curly brackets because it's a named export
// 'history' is the enhanced history, which first passes users new url location thru the redux store and then onto React Router to update the component tree
import store, { history } from './store';

/* Sentry setup
// import Raven from 'raven-js';
// import { sentry_url } from './data/config';
// set up sentry to catch user error-info
// Raven.config(sentry_url).install();
// console.log(window.doesNotExist.nope);
*/


const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));

