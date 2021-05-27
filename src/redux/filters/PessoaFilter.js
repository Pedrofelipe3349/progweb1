//mapStateToProps

import values from "lodash/values";


export const pessoaListaFilter = ( {pessoaState} ) => {
    return { pessoaLista: values(pessoaState.pessoaLista) }
}


export const pessoaItemFilter = ( {pessoaState} ) => {
    return { pessoaItem: values(pessoaState.pessoaItem) }
}