var CommentForm = React.createClass({
  render: function() {
    return (
      <form className="commentForm">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var CommentList = React.createClass({
	
	render: function() {
		var commentNodes = this.props.data.map(function (comment,i) {
			return (
			   <Comment key={i} author={comment.author}>
			     {comment.text}
			   </Comment>     
			);
		});
		return (
			<div className="commentList" >
				{commentNodes}
			</div>
		);
	}
});

var CommentForm = React.createClass({
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
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
        	{this.props.author}
        </h2>
        <p className="commments" dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var CommentBox = React.createClass({
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
			<div className="commentBox" >
				<h1>commentBox</h1>
				<CommentList data={this.state.data} />
			</div>
		);
	}

});

ReactDOM.render(
	<CommentBox  url="/data/data" className="CommentBox" />,
	document.getElementById("content")
)