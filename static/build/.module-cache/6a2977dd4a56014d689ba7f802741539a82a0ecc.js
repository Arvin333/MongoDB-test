var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		var commentNodes = this.props.data.map(function (comment,i) {
			return (
			   React.createElement(Comment, {key: i, author: comment.author}, 
			     comment.text
			   )     
			);
		});
		return (
			React.createElement("div", {className: "commentList"}, 
				commentNodes
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
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
        	this.props.author
        ), 
        React.createElement("p", {className: "commments", dangerouslySetInnerHTML: this.rawMarkup()})
      )
    );
  }
});

var CommentBox = React.createClass({displayName: "CommentBox",

	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "commentBox"), 
				React.createElement(CommentList, {data: this.props.data})
			)
		);
	}

});

ReactDOM.render(
	React.createElement(CommentBox, {data: "/data/data"}),
	document.getElementById("content")
)