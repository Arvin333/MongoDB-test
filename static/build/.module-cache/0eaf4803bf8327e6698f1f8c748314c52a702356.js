var CommentBox = React.createClass({displayName: "CommentBox",

	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				"hellow world!", 
				React.createElement("h1", null, "commentBox"), 
				React.createElement("commentList", null), 
				React.createElement(ComentForm, null)
			)
		);
	}

});

ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById("content")
)