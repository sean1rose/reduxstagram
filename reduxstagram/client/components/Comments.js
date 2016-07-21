/*
-Comments Component
-instead of using an individual comment component to render out the array of comments, use a renderComment function that is a part of this component
	-this function is the callback used on the postComments array map-function
-VID 15: updating comment state in our store
	-place a handleSubmit function onSubmit of form
*/

import React from 'react'

const Comments = React.createClass({
  renderComment(comment, i){
		return(
			<div className="comment" key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment">&times;</button>
				</p>
			</div>
		)
  },
	handleSubmit(e){
		// prevent page from refreshing
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		console.log('this.props -',this.props);
		this.props.addComment(postId, author, comment);
	},
  render () {
    return (
      <div className="comments">
      	{this.props.postComments.map(this.renderComment)}
      	<form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
					<input type="text" ref="author" placeholder="author"/>
					<input type="text" ref="comment" placeholder="comment"/>
					<input type="submit" hidden />
      	</form>
      </div>
    )
  },
})

export default Comments;