import React from 'react';
import * as yup from 'yup';
import { ErrorMessage, Formik, Form as FormikForm, Field} from 'formik';
import MaskedInput from 'react-text-mask';

export default function Form({handleSubmit, initialValues}){

  const validations = yup.object().shape({
    phone: yup.string().required('informe o contato')
  })

  return (
        
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations} >

          <FormikForm>

          <Field name='telefone' > {({ field }) => ( <MaskedInput mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} {...field} maskChar={null} placeholder='Telefone' className="form-control" /> )} </Field>

            <div className='rodape'>
            <ErrorMessage component='p' name='phone' />
            <ErrorMessage component='p' name='password' />

            </div>          

            <button type='submit'>Entrar</button>

          </FormikForm>


        </Formik>
  )
}