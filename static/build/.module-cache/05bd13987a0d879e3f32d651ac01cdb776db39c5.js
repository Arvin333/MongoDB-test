var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
var CommentList = React.createClass({displayName: "CommentList",
	
	render: function() {
		// var commentNodes = this.props.data.map(function (comment,i) {
		// 	return (
		// 	   <Comment key={i} author={comment.author}>
		// 	     {comment.text}
		// 	   </Comment>     
		// 	);
		// });
		return (
			React.createElement("div", {className: "commentList"}, 
				"\"commentNodes\""
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

var Comment = React.createClass({displayName: "Comment",
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
        	this.props.author
        ), 
        React.createElement("p", {className: "commments", dangerouslySetInnerHTML: this.rawMarkup()})
      )
    );
  }
});

var CommentBox = React.createClass({displayName: "CommentBox",
	loadCommentsFromServer: function() {
	  $.ajax({
	    url: this.props.url,
	    dataType: 'json',
	    cache: false,
	    success: function(data) {
	      console.log(data)
	    }.bind(this),
	    error: function(xhr, status, err) {
	      console.error(this.props.url, status, err.toString());
	    }.bind(this)
	  });
	},
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "commentBox"), 
				React.createElement(CommentList, {data: this.props.data})
			)
		);
	}

});

ReactDOM.render(
	React.createElement(CommentBox, {url: "/data/data"}),
	document.getElementById("content")
)