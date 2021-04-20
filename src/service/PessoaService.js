import axios from 'axios';

    const listar = () => {
        return axios.get('http://localhost:3004/pessoas');
    }

    const buscarPeloId = (id) => {}

    const salvar = (pessoa) => {}

    const excluir = (id) => {
        return axios.delete('http://localhost:3004/pessoas',+id);
    }


    export default{ 

        listar,
        buscarPeloId,
        salvar,
        excluir,
        
    }

