import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const {onSubmit} = this.props
        if (typeof(onSubmit) === 'function') return onSubmit(this.state.login)
    }

  render() {
    return (
      <div className='login_form'>
          <form>
            <input placeholder='Имя пользователя' value={this.state.login} onChange={e => this.setState({login:e.target.value})} />
            <input type='submit' value="Войти" onClick={this.handleSubmit} />
          </form>
      </div>
    )
  }
}
