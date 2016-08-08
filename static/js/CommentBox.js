var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function (comment,i) {
			return (
			   <Comment key={i} author={comment.author}>
			     {comment.text}
			   </Comment>     
			);
		});
		return (
			<div className="commentList" >
				{commentNodes}
			</div>
		);
	}

});

var CommentForm = React.createClass({

	render: function() {
		return (
			<div className="commentForm">
				hello world! I am a commentForm.
			</div>
		);
	}

});

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
        	{this.props.author}
        </h2>
        <p className="commments" dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var CommentBox = React.createClass({

	render: function() {
		return (
			<div className="commentBox" >
				<h1>commentBox</h1>
				<CommentList data={this.props.data} />
			</div>
		);
	}

});

ReactDOM.render(
	<CommentBox  data={data} />,
	document.getElementById("content")
)