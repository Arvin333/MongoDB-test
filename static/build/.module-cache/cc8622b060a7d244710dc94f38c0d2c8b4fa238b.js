var commentBox = React.createClass({displayName: "commentBox",

	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				"hellow world!"
			)
		);
	}

});

ReactDom.render(
	React.createElement("commentBox", null),
	document.getElementById("content")
)