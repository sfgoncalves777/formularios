import React from 'react';
import './style.css';

export default function Form(){
  return (
    <div className='div-content'>
      <h1>Animation Input</h1>

      <div>
        <div className='input'>
          <label className='erro'>Erro</label>
          <div className="label-float">
            <input type="text" placeholder=" "/>
            <label>Nome</label>
          </div>        
        </div>

        <div className='input'>
          <label className='erro'>Erro</label>
          <div className="label-float">
            <input type="text" placeholder=" "/>
            <label>Telefone</label>
          </div>        
        </div>       
      </div>

      
    </div>
  )
}