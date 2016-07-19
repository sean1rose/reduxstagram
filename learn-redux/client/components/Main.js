// rccs -> react stateful component
import React from 'react';
import { Link } from 'react-router';
// using Link from react-router so that when click on Reduxstagram h1 text -> brings us to main page

/* NOTES (vid 3)
-want react-router to pass in Photo-Grid.js or Single as this.props.children to Main Component
-this is our parent component. The child will be either single or photo grid. 
-switching b/w the 2 children is handled by react-router
-normally add {this.props.children} where React.cloneElement is, which is populated by react-router, changing into photogrid or single
-but need to use cloneElement cuz can't pass in props using just {this.props.children}
-cloneElement takes any props passed from parent components (Main, Router, Connect, Provider, etc) and passes them to child components
*/

const Main = React.createClass({
  render () {
    return (
      <div>
      	<h1>
      		<Link to="/">Reduxstagram</Link>
      	</h1>
      	{React.cloneElement(this.props.children, this.props)}
      </div>
    )
  },
});

// allows us to import Main in reduxstagram.js
export default Main;