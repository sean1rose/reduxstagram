/*
-rccs -> react stateful component
-PhotoGrid component receives the array of posts data (receives it as props courtesy of connect)
	- then want to iterate thru the array and dispaly each one using the Photo Component
	- Photo component will have various attributes, such as a post attribute, which it will then receive as props so that it receives the data

*/

import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render () {
    return (
      <div className="photo-grid">
				{this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  },
});

export default PhotoGrid;