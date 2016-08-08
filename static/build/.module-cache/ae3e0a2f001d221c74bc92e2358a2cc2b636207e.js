var CommentBox = React.createClass({displayName: "CommentBox",

	render: function() {
		return (
			React.createElement("div", {className: "CommentBox"}, 
				"hellow world!"
			)
		);
	}

});

ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById("content")
)