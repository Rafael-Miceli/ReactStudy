
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
  render: function(){
    return (
      <form>
        <input placeholder="Github Username" />
        <button type="submit">Adicionar Usuário</button>
      </form>
    )
  }
})

var App = React.createClass({
  getInitialState: function(){
    return {usernames: ['rafael-miceli', 'ricardovalente']};
  },
  render: function() {
    var userNameCards = this.state.usernames.map(function(username){
      return (<Developer username={username}/>)
    });
    return (
        <div>
          <AddUserNameForm />
          {userNameCards}
        </div>
    )
  }

});

ReactDOM.render(<App />, document.getElementById("mainPlay"));