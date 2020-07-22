import React from 'react';

function input(props) {
  return (
    <div>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input
          value={account.username}
          onChange={this.handleChange}
          id='username'
          name='username'
          type='text'
          className='form-control'
          autoFocus
        />
      </div>
    </div>
  );
}

export default input;
