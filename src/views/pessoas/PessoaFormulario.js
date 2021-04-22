import React from 'react';
import { Formik } from 'formik'


function PessoaFormulario(){
    return(
    <div className = "">
        <h1>Cadastro de pessoa</h1> 
        <Formik
               initialValues={{ img: '', nome: '', cpf: '' }}
                onSubmit= {(values,{setSubmitting} ) => {
                    setTimeout(() => {
                        console.log(values);
                        setSubmitting(false);      
                    }, 3000);
                } }   
        >

       {({ handleSubmit,isSubmitting})=> (

       
            <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input name ="img" type="file" className="form-control" id="inputGroupFile02"/>
                            <label className="input-group-text" htmlfor="inputGroupFile02">Upload</label>
                            </div>

                    <div className="mb-3">
                        <label name ="nome" htmlfor="exampleInputEmail1" className="form-label">Nome</label>
                        <input  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>

                        <div className="mb-3">
                        <label  htmlfor="exampleInputEmail1" className="form-label">CPF</label>
                        <input name ="cpf" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>

                <button type="submit" disabled={isSubmitting} class="btn btn-primary">Salvar</button>
            </form>
       
       )}   


        </Formik>

    </div>
    );
}

export default PessoaFormulario;