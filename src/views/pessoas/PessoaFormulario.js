import React, { useState, useEffect } from 'react';

import { Formik , Form, Field, ErrorMessage } from 'formik'
import PessoaService from '../../service/PessoaService'

import { 
    useHistory,
    useParams
  } from "react-router-dom";



function PessoaFormulario(){

    let history = useHistory();
    let {id} = useParams(); 
    useEffect(() =>{
        buscarPessoa();
      },[]);
    const [pessoa, setPessoa] = useState({});


    const buscarPessoa = () => {
        if(id != undefined){
            PessoaService.buscarPeloId(id)
            .then(response => {
                setPessoa(response.data);
            })
            .catch( error => console.log( "ERROR => ". error))
        }    
    }  
    const handleSubmit = (values, {setSubmitting}) => {

        PessoaService.salvar(values)
        .then( response => {
            setSubmitting(false);
            history.push("/pessoa/lista");
        })
        .catch(error => console.log("ERROR = ", error) )

    }

    return(
    <div>
        <h1>Cadastro de pessoa</h1> 


        <Formik
               initialValues={id==undefined? {img:'', nome: '', cpf:''}: pessoa}
                onSubmit= {(values, {setSubmitting} ) => handleSubmit(values, {setSubmitting} ) }
        >

        {  ({ values, handleSubmit, isSubmitting }) => (

                    <Form onSubmit={handleSubmit}>

                        <div className="input-group mb-3">
                            <Field type="text" name="img" className="form-control" />
                            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                        </div>

                        <div className="mb-3">
                            <label name="nome" htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                            <Field type="text" name="nome" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">CPF</label>
                            <Field type="text" name="cpf" className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={isSubmitting} >Salvar</button>
                    </Form>


                )}



            </Formik>

    </div>
    );
}

export default PessoaFormulario;