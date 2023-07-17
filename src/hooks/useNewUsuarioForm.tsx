import {useReducer} from 'react'
import { Usuario } from '../componentes/encomun/Usuario'

interface FormState {
    inputValue: Usuario
}

type FormReducerAction = {
    type:"change_value"
    payload: {
        inputName: string,
        inputValue: string
    }
} | {type:"clear"}

export const INITIAL_STATE = {
    id_user:'',
    apellido:'',
    nombre:'',
    correo: '',
    nombre_Us:'',
    contraseña:'',
    permisos:''
}

const formReducer = (state: FormState['inputValue'], action: FormReducerAction) => {
    switch (action.type) {
        case 'change_value':
            const {inputName, inputValues} = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
        case 'clear':
            return INITIAL_STATE
        default:
            return state
    }
}

const useNewUsuarioForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewUsuarioForm