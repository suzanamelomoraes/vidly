import React, { Component } from 'react';

export class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: '',
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Call the server
    console.log('Submitted');
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              id='username'
              name='username'
              type='text'
              className='form-control'
              autoFocus
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              value={this.state.account.password}
              onChange={this.handleChange}
              id='password'
              name='password'
              type='text'
              className='form-control'
              autoFocus
            />
          </div>
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
