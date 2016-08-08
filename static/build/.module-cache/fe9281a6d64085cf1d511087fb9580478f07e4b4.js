var CommentBox = React.createClass({displayName: "CommentBox",

	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				"hellow world!", 
				React.createElement("h1", null, "commentBox"), 
				React.createElement("ommentList", null), 
				React.createElement(CommentForm, null)
			)
		);
	}

});

ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById("content")
)