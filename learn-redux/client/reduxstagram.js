import React from 'react';
// render method, allows us to render out to html
import { render } from 'react-dom';
// import css
import css from './styles/style.styl'
// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
// import react-router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/* NOTES
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
*/

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/view/:postId" component={Single}></Route>
		</Route>
	</Router>
)

render(router, document.getElementById('root'));

