//import React from 'react';
import axios from 'axios'; 


const listar = () => {
    return axios.get( 'http://localhost:3004/pessoas');

}

const buscarPeloId = (id) => {
    return axios.get( 'http://localhost:3004/pessoas/'+id);
}

const salvar = (pessoa) => {

    if(pessoa.id == undefined){
        return axios.post('http://localhost:3004/pessoas/',pessoa)
    } 
    else {
        return axios.put('http://localhost:3004/pessoas/'+pessoa.id,pessoa)
    }

}

const excluir = (id) => {
    return axios.delete( 'http://localhost:3004/pessoas/'+id);
}


export default {
    listar,
    buscarPeloId,
    salvar,
    excluir
}
