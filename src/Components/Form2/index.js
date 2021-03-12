import React from 'react';
import * as yup from 'yup';
import { ErrorMessage, Formik, Form as FormikForm} from 'formik';
import InputMask from 'react-input-mask';

export default function Form({handleSubmit, initialValues}){

  const validations = yup.object().shape({
    telefone: yup.string().min(5, 'Contato inválido').required('informe o Contato')
  })

  return (
        
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations} >

          <FormikForm>

            <InputMask mask="99999-9999" maskChar={null} name='telefone' placeholder='telefone'/>
            

            <div className='rodape'>
            <ErrorMessage component='p' name='telefone' />

            </div>          

            <button type='submit'>Entrar</button>

          </FormikForm>


        </Formik>
  )
}