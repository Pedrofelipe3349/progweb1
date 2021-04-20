import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt,faTrashAlt,faSearch} from '@fortawesome/free-solid-svg-icons'
import '../../Styles.css';
import Modal from 'react-bootstrap/Modal'


  function Pessoalista(){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false); 
    const handleShow = () => setShow(true);
   
    return(
    <div>
        <h1>Lista de Pessoa</h1>
        <div className="container">
          <div className="row">
            <div classname="col-sm text-align-left">
              <Link to="/pessoa/formulario" className="btn btn-primary">Novo</Link>
            </div>
            <div className="col-sm text-align-right">
              <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                <span className="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faSearch} /></span>
              </div>    </div>
          </div>
        </div>

        

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Operações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
              <Link to="/pessoa/formulario/1" className="btn btn-outline-dark mrl-10"><FontAwesomeIcon icon={faPencilAlt}/></Link>
              <Button variant="outline-dark" onClick={handleShow}><FontAwesomeIcon icon={faTrashAlt}/></Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
              <Link to="/pessoa/formulario/1" className="btn btn-outline-dark mrl-10"><FontAwesomeIcon icon={faPencilAlt}/></Link>
              <Button variant="outline-dark" onClick={handleShow}><FontAwesomeIcon icon={faTrashAlt}/></Button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>
              <Link to="/pessoa/formulario/1" className="btn btn-outline-dark mrl-10"><FontAwesomeIcon icon={faPencilAlt}/></Link>
              <Button variant="outline-dark" onClick={handleShow}><FontAwesomeIcon icon={faTrashAlt}/></Button>
              </td>
            </tr>
          </tbody>
        </table>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmar exclusão</Modal.Title>
          </Modal.Header>
          <Modal.Body>Deseja realmente excluir o usuario1</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
          </Button>
            <Button variant="danger" onClick={handleClose}>
             Excluir
          </Button>
          </Modal.Footer>
        </Modal>




    </div>
    );
}
export default Pessoalista;
