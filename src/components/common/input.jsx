import React from 'react';

const input = ({ name, label, value, onChange }) => {
  return (
    <div>
      <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <input
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          type='text'
          className='form-control'
          autoFocus
        />
      </div>
    </div>
  );
};

export default input;
