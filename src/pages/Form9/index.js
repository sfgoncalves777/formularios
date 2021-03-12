import React, {useRef} from 'react';
import './style.css';

export default function Login(){
  const inputRef = useRef({
    email: '',
    password: ''
  });

  function handleSubmit() {
    alert(inputRef.current.value);
  }

  return (
    <div className='login-container'>
      <section className='div-form'>
        <div id='logo'><label id='tag'>Tag</label>  <label id='sistemas'>Sistemas</label></div>
        <form>
          <input
            id='email'
            type='text'
            name='email'
            placeholder='E-mail'
            ref={inputRef}
          />

          <input
            id='senha'
            type='password'
            name='password'
            placeholder='Senha'
            ref={inputRef}
          />   

          <button onClick={handleSubmit} >Entrar</button>

        </form>
      </section>
    </div>
  )
}