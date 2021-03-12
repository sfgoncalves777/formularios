import React from 'react';
import './style.css';

export default function Form(){
  return (
    <div className='div-content'>
      <h1>Animation Input</h1>

      <div className='form'>
        <input type='text' name='name' autoComplete='off' required />
        <label className='label-name'>
          <span className='content-name'>Name</span>
        </label>
      </div>
    </div>
  )
}