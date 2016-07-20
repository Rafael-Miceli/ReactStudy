
var Developer = React.createClass({
  getInitialState(){
    return {};
  },
  componentDidMount: function() {
    var component = this;
    $.get("https://api.github.com/users/" + this.props.username, function(data){
      component.setState(data);
    });
  },
  render: function() {
    return (
      <div>
        <img src={this.state.avatar_url} alt={this.props.username} width="80"/>
        <h3>{this.state.name}</h3>
      </div>
    )
  }

});

var App = React.createClass({
  
  render: function() {
    return(
        <div>
          <Developer username="rafael-miceli"/>
        </div>
    )
  }

});

ReactDOM.render(<App />, document.getElementById("mainPlay"));