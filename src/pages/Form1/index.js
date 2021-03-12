import React, {useState} from 'react';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import './style.css';

export default function Login(){

  return (
    <div className='login-container'>
      <section className='div-form'>
        <div id='logo'><label id='tag'>Tag</label>  <label id='sistemas'>Sistemas</label></div>
        <form>
          
          <InputMask mask="99999-9999" maskChar={null} name='teste' placeholder='telefone'/>

        </form>
      </section>
    </div>
  )
}