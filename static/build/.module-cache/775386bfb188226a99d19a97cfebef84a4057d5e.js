var CommentList = React.createClass({displayName: "CommentList",

	render: function() {
		return (
			React.createElement("div", {className: "commentList"}, 
				"hello, world ! I am a commentList."
			)
		);
	}

});

module.exports = CommentList;