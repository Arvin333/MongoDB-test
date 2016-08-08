var commentList = React.createClass({displayName: "commentList",

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

module.exports = commentList;