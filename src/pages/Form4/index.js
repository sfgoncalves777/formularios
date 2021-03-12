import React, {useState} from 'react';
import './style.css';

export default function Login(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({});

  function login(e){
    e.preventDefault();
    alert(email, senha);
  }
  
  function HandleEmailBlur(){
    if(!email.trim().length){
      setErrors({
        ...errors, user: 'Must be filed'
      })
    } else{
      setErrors({
        ...errors, user: ''
      })
    }
  }

  return (
    <div className='login-container'>
      <section className='div-form'>
        <div id='logo'><label id='tag'>Tag</label>  <label id='sistemas'>Sistemas</label></div>
        <form onSubmit={login}>
          <input
            id='email'
            type='text' 
            placeholder='E-mail'
            value={email}
            onBlur={HandleEmailBlur}
            onChange={ e => setEmail(e.target.value) }
          />

          <input
            id='senha'
            type='password'
            placeholder='Senha'
            value={senha}
            onChange={ e => setSenha(e.target.value) }
          />

          <div className='rodape'>
            <p>{errors.user}</p>

          </div>          

          <button>Entrar</button>

        </form>
      </section>
    </div>
  )
}