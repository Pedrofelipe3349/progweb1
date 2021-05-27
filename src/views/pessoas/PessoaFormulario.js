import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
    useHistory,
    useParams
  } from "react-router-dom";


import PessoaService from '../../service/PessoaService';

function PessoaFormulario(){
    
    /* HOOKS */
    let history = useHistory();
    let {id} = useParams();
    useEffect(() => {
        buscarPessoa();
    }, []);

    /* STATES */
    const [pessoaState, setPessoaState] = useState({});

    /* MÉTODOS SERVICE */
    const buscarPessoa = () => {
        if(id != undefined){
            PessoaService.buscarPeloId(id)
            .then(response => {
                setPessoaState(response.data);
            })
            .catch( error => console.log( "ERROR => ". error))
        }
        
    }

    /* MÉTODOS DA VIEW */
    const handleSubmit = (values, {setSubmitting} ) => {
        
        PessoaService.salvar(values)
        .then( response => {
            setSubmitting(false);
            history.push("/pessoa/lista");
        })
        .catch(error => console.log("ERROR = ", error) )

    }

    const mapStateToObject = () => {
        return {
            id: pessoaState.id || undefined,
            nome: pessoaState.nome || '',
            cpf: pessoaState.cpf || '',
            img: pessoaState.img || ''
        }
    }

    
    return(
        <div>
            <h1>Cadastro de Pessoa</h1>

            <Formik 
                initialValues={ mapStateToObject() }
                enableReinitialize
                onSubmit={ (values, {setSubmitting} ) => handleSubmit(values, {setSubmitting} ) }

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
