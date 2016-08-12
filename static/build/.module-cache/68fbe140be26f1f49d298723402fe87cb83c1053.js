var CommentBox = React.createClass({displayName: "CommentBox",

	getInitialState: function() {
	    return {data: []};
	 },
	loadCommentsFromServer: function() {
	  $.ajax({
	    url: "www.arvin.com/api",
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