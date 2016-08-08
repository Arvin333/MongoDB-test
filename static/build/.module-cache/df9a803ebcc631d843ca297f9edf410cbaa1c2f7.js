var CommentList = React.createClass({displayName: "CommentList",

	render: function() {
		return (
			React.createElement("div", {className: "commentList"}, 
				"hello, world ! I am a commentList."
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

var CommentBox = React.createClass({displayName: "CommentBox",

	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				"hellow world!", 
				React.createElement("h1", null, "commentBox"), 
				React.createElement(CommentList, null), 
				React.createElement(CommentForm, null)
			)
		);
	}

});

ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById("content")
)