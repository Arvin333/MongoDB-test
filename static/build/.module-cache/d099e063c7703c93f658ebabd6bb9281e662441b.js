var CommentList = React.createClass({displayName: "CommentList",

	render: function() {
		return (
			React.createElement("div", {className: "commentList"}, 
				"hello, world ! I am a commentList."
			)
		);
	}

});


var commentForm = React.createClass({displayName: "commentForm",

	render: function() {
		return (
			React.createElement("div", {className: "commentForm"}, 
				"hello world! I am a commentForm."
			)
		);
	}

});

module.exports = commentList;

module.exports = CommentList;