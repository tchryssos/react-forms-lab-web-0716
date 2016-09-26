const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.usernameFill=this.usernameFill.bind(this)
    this.passwordFill=this.passwordFill.bind(this)
    this.formSubmit=this.formSubmit.bind(this)
  }

  usernameFill(e){
    this.setState({
      username: e.target.value
    }, console.log(this.state.username))
  }

  passwordFill(e){
    this.setState({
      password: e.target.value
    }, console.log(this.state.password))
  }

  formSubmit(e){
    e.preventDefault()
    if(this.state.username!= "" && this.state.password != ""){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.usernameFill}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.passwordFill}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
