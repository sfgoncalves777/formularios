import React from 'react';
import InputMask from 'react-input-mask';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import './style.css';

export default function Login(){

  const initialValues = {
    telefone: ''
  }

  const onSubmit = values => {
    console.log(values);
  }

  const validationSchema = Yup.object({
    telefone: Yup.string().min(13).required()
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });  

  return (
    <div className='login-container'>
      <section className='div-form'>
        <div id='logo'><label id='tag'>Tag</label>  <label id='sistemas'>Sistemas</label></div>
        <form onSubmit={formik.handleSubmit}>

          <InputMask
           mask="(99)9999-9999"
           maskChar={null}
           name='telefone'
           placeholder='Telefone'
           onChange={formik.handleChange}
           value={formik.values.telelefone}
          />

          <div className='rodape'>           
          
            <p>{formik.errors.telefone}</p>

          </div>          

          <button type='submit'>Entrar</button>

        </form>
      </section>
    </div>
  )
}