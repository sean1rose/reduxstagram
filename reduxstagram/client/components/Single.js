/*
-rccs -> react stateful component
-VID 13
-Single Post === (Photo Component) + (Comments Component)
*/


import React from 'react';
import Photo from './Photo';
// import comments
import Comments from './Comments';

const Single = React.createClass({
  render () {
  	const { postId } = this.props.params
  	// need index of the post
  	const i = this.props.posts.findIndex((post) => post.code === postId);
  	// get us the post
  	const post = this.props.posts[i];
  	// get the specific photo's comments
  	const postComments = this.props.comments[postId] || [];
    return (
      <div className="single-photo">
      	<Photo i={i} post={post} {...this.props} />
      	<Comments postComments={postComments} ></Comments>
      </div>
    )
  },
});

export default Single;