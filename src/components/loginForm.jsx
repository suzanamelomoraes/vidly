import React, { Component } from 'react';
import Input from './common/input';

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

  // note: refactor e by destructuring currentTarget from it and rename to input
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    // account[e.currentTarget.name] = e.currentTarget.value;
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              value={account.password}
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
