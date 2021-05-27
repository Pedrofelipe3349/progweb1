import PessoaService from "../../service/PessoaService";

export const PESSOA_ACTIONS = {
    LISTAR: "PESSOA_LISTAR",
    BUSCAR: "PESSOA_BUSCAR",
    SALVAR: "PESSOA_SALVAR",
    ALTERAR: "PESSOA_ALTERAR",
    EXCLUIR: "PESSOA_EXCLUIR"
}

export function listarPessoa() {

    return function( callback ){

        PessoaService.listar()
        .then(response => {

            callback({
                type: PESSOA_ACTIONS.LISTAR,
                content: response.data
            })

        })
        .catch( error => { console.log("ERROR = ", error) } )  

    }

}

export function buscarPessoa() {}

export function salvarPessoa() {}

export function alterarPessoa() {}

export function excluirPessoa() {}