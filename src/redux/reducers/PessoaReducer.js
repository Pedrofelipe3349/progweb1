import {PESSOA_ACTIONS} from "../actions/PessoaAction";

const pessoaState = {
    pessoaLista: [],
    pessoaItem: {}
}

export default function pessoaReducer(state = pessoaState, callback){

    switch(callback.type){

        case PESSOA_ACTIONS.LISTAR:
            return {
                ...state,
                pessoaLista: callback.content
            }
        default:
            return state;
    
    }



}
