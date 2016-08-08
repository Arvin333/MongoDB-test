var CommentBox = React.creatClass({
	render:function () {
		return (
			React.createElement("div", {className: "commentBox"}, 
				"hellow,world I am a CommentBox."
			)
		);
	}
})

ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementByID("content")
)