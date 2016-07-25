
var Developer = React.createClass({
  getInitialState: function(){
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

var AddUserNameForm = React.createClass({
  addGithubUser: function(e){
    e.preventDefault();
    var inputAddUsername = ReactDOM.findDOMNode(this.refs.usernameToAdd);
    this.props.addDeveloperCard(inputAddUsername.value);    
    inputAddUsername.value = '';
  },
  render: function(){
    return (
      <form onSubmit={this.addGithubUser}>
        <input placeholder="Github Username" ref="usernameToAdd"/>
        <button type="submit">Adicionar Usuário</button>
      </form>
    )
  }
})

var App = React.createClass({
  addDeveloperCard: function(usernameToAdd){
    this.setState({usernames: this.state.usernames.concat(usernameToAdd)});
  },
  getInitialState: function(){
    return {usernames: []};
  },
  render: function() {
    var userNameCards = this.state.usernames.map(function(username){
      return (<Developer username={username}/>)
    });
    return (
        <div>
          <AddUserNameForm addDeveloperCard={this.addDeveloperCard}/>
          {userNameCards}
        </div>
    )
  }

});

ReactDOM.render(<App />, document.getElementById("mainPlay"));