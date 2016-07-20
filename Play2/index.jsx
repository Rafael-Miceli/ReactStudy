
var ButtonCounter = React.createClass({  
  localClick: function () {
    this.props.localClick(this.props.valueToIncrement);    
  },
  render: function() {
    return (
      <button onClick={this.localClick}>Clicked me {this.props.valueToIncrement}</button>
    )
  }
});

var CounterDisplay = React.createClass({
  render: function() {
    return (
      <h2>{this.props.valueToDisplay}</h2>
    )
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {totalClicks: 0};
  },
  handleClick: function(increment) {
    this.setState({totalClicks: this.state.totalClicks + increment})
  },
  render: function() {
    return(
        <div>
          <ButtonCounter localClick={this.handleClick} valueToIncrement={2}/>
          <ButtonCounter localClick={this.handleClick} valueToIncrement={10}/>
          <ButtonCounter localClick={this.handleClick} valueToIncrement={20}/>
          <ButtonCounter localClick={this.handleClick} valueToIncrement={50}/>
          <CounterDisplay valueToDisplay={this.state.totalClicks}/>
        </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById("mainPlay"));