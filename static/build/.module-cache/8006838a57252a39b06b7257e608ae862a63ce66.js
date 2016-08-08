var commentBox = React.createClass({displayName: "commentBox",

	render: function() {
		return (
			React.createElement("div", {className: ""}, 
				"hellow world!"
			)
		);
	}

});

ReactDOM.render(
	React.createElement("commentBox", null),
	document.getElementById("content")
)