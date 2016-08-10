var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
var CommentList = React.createClass({displayName: "CommentList",
	
	render: function() {
		var commentNodes = this.props.data.map(function (comment,i) {
			return (
			   React.createElement(Comment, {key: i, author: comment.author}, 
			     comment.text
			   )     
			);
		});
		return (
			React.createElement("div", {className: "commentList"}, 
				commentNodes
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
	getInitialState: function() {
	    return {data: []};
	 },
	loadCommentsFromServer: function() {
	  $.ajax({
	    url: this.props.url,
	    dataType: 'json',
	    cache: false,
	    success: function(data) {
	      this.setState({data: data});
	    }.bind(this),
	    error: function(xhr, status, err) {
	      console.error(this.props.url, status, err.toString());
	    }.bind(this)
	  });
	},
	// componentDidMount: function() {
	//   this.loadCommentsFromServer();
	//   setInterval(this.loadCommentsFromServer, 1000);
	// },
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "commentBox"), 
				React.createElement(CommentList, {data: this.state.data})
			)
		);
	}

});

ReactDOM.render(
	React.createElement(CommentBox, {url: "/data/data", className: "CommentBox"}),
	document.getElementById("content")
)