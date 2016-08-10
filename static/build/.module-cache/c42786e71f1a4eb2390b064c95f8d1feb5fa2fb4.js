var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("form", {className: "commentForm"}, 
        React.createElement("input", {type: "text", placeholder: "Your name"}), 
        React.createElement("input", {type: "text", placeholder: "Say something..."}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
    );
  }
});

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
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    this.refs.author.value = '';
    this.refs.text.value = '';
    return;
  },
  render: function() {
    return (
      React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", placeholder: "Your name", ref: "author"}), 
        React.createElement("input", {type: "text", placeholder: "Say something...", ref: "text"}), 
        React.createElement("input", {type: "submit", value: "Post"})
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
	componentDidMount: function() {
	  this.loadCommentsFromServer();
	  setInterval(this.loadCommentsFromServer, 2000);
	},
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