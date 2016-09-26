const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.typing=this.typing.bind(this)

    this.state = {
      value:""
    };
  }

  typing(e){
    this.setState({
      value: e.target.value,
    }, console.log(this.state.value))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.typing}/>
        <p>{this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
