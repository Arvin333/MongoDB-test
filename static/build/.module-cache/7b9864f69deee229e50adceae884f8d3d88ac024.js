var CommentBox = React.createClass({displayName: "CommentBox",

	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}
			)
		);
	}

});
ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById("content")
)