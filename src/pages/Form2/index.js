import React from 'react';
import Form  from '../../Components/Form1';
import './style.css';

const handleSubmit = values => alert(JSON.stringify(values))
const initialValues = {}

export default function Login(){

  return (
    <div className='login-container'>
      <section className='div-form'>
        <div id='logo'><label id='tag'>Tag</label>  <label id='sistemas'>Sistemas</label></div>
        
          <Form handleSubmit={handleSubmit} initialValues={initialValues} />

      </section>
      
    </div>
  )
}