var CommentList = React.createClass({displayName: "CommentList",

	render: function() {
		return (
			React.createElement("div", {className: "commentList"}, 
				React.createElement(Comment, {className: "arin", author: "Pete Hunt"}, "This is one comment"), 
        		React.createElement(Comment, {author: "Jordan Walke"}, "This is *another* comment")
			)
		);
	}

});

var CommentForm = React.createClass({displayName: "CommentForm",

	render: function() {
		return (
			React.createElement("div", {className: "commentForm"}, 
				"hello world! I am a commentForm."
			)
		);
	}

});

var Comment = React.createClass({displayName: "Comment",
  render: function() {
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.className
        ), 
        this.props.children
      )
    );
  }
});

var CommentBox = React.createClass({displayName: "CommentBox",

	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "commentBox"), 
				React.createElement(CommentList, null)
			)
		);
	}

});

ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById("content")
)