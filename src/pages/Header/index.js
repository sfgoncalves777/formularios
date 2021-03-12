import React, {useState} from 'react';
import Sidebar from 'react-sidebar';
import {FiMenu, FiSave, FiPower} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import './style.css';

export default function Header({children}){
  
  const [menu, setMenu] = useState();
  const [funcionalidades, setFuncionalidades] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState();

  function click_Menu(){
    setMenu('Cadastro');
    setFuncionalidades(['Usuário']);
    setSidebarOpen();
  }

  function openSetSidebarOpen(open){
    setSidebarOpen(open);
  }
  
  return (

    <Sidebar
      sidebar={

        <div className='content-menu'>

          <FiMenu
            className='icn-menu'
            size={35}
            color='#F2F2F2'
            onClick={ ()=> {
                setSidebarOpen();
              } 
            }
          />

          <div className='logo'>
            
            <label id='tag'>Tag </label>
            <label id='sistemas'>Sistemas</label>
          
          </div>

          <div className='menu' onClick={click_Menu} >

            <p className='op_menu'>Cadastro</p>
            <FiSave size={35} color='#F2F2F2' />

          </div>

          <div className='sair'>

            <p className='op_menu'>Sair</p>
            <FiPower size={35} color='#F2F2F2' />

          </div>
          
        </div>
      }
      open={sidebarOpen}
      onSetOpen={openSetSidebarOpen}
    >

      <div className='content'>

        <FiMenu
          className='icn-menu'
          size={35}
          color='#F2F2F2'
          onClick={ ()=> {
              openSetSidebarOpen(true);
            } 
          }
        />

        <p className='menu_selected'>{menu}</p>

        {
          funcionalidades.map(funcionalidade => (

            <div key='funcionalidade' className='submenus'>

              <Link className='op_submenu' to={funcionalidade.toLowerCase() }>{funcionalidade}</Link>

            </div>

          ))
        }

        {children}

      </div>

    </Sidebar>

  )

}