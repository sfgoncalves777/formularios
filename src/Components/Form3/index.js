import React from 'react';
import * as yup from 'yup';
import { ErrorMessage, Formik, Form as FormikForm, Field} from 'formik';
import {render} from 'react-dom';
import MaskedInput from 'react-text-mask';

export default function Form({handleSubmit, initialValues}){

  const validations = yup.object().shape({
    phone: yup.string().required('informe o contato')
  })

  const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];

  return (
        
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations} >

          <FormikForm>

          <Field
              name="phone"
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={phoneNumberMask}
                  id="phone"
                  placeholder="Enter your phone number"
                  type="text"
                />
              )}
            />

            <div className='rodape'>
            <ErrorMessage component='p' name='phone' />
            <ErrorMessage component='p' name='password' />

            </div>          

            <button type='submit'>Entrar</button>

          </FormikForm>


        </Formik>
  )
}