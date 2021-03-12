import React, {useState} from 'react';
import * as Yup from 'yup';
import './style.css';

export default function Login(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({});

  async function login(dados){
    dados.preventDefault();

    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('O E-mail é obrigatório'),
        senha: Yup.string().required('Senha requerida')
      });

      await schema.validate(dados, {
        abortEarly: false
      })

      alert(email, senha);

    } catch (err) {
      if( err instanceof Yup.ValidationError){

        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })

        setErrors(errorMessages);

      }

    }
    
    console.log(errors);

  }

  return (
    <div className='login-container'>
      <section className='div-form'>
        <div id='logo'><label id='tag'>Tag</label>  <label id='sistemas'>Sistemas</label></div>
        <form onSubmit={login}>
          <input
            id='email'
            type='text' 
            name='email'
            placeholder='E-mail'
            value={email}
            onChange={ e => setEmail(e.target.value) }
          />

          <input
            id='senha'
            type='password'
            placeholder='Senha'
            value={senha}
            name='senha'
            onChange={ e => setSenha(e.target.value) }
          />

          <div className='rodape'>
            <p>{errors.email}</p>

          </div>          

          <button>Entrar</button>

        </form>
      </section>
    </div>
  )
}