
var LikeButton1 = React.createClass({displayName: "LikeButton1",
      render: function() {
        return (
          React.createElement("div", null, "21")
        );
      }
    });

    var CommentBox = React.createClass({displayName: "CommentBox",
      render: function() {
        return (
          React.createElement("div", null, "21")
        );
      }
    });

    ReactDOM.render(
      React.createElement(CommentBox, null),
      document.getElementById('example')
    );
