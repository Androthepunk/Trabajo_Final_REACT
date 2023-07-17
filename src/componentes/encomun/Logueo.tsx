import { Usuario } from './Usuario'
import useNewUsuarioForm from '../../hooks/useNewUsuarioForm'

interface FormProps {
    children: React.ReactNode
    OnNewSus: (newSus: Usuario) => void
}

    

function Logueo({OnNewSus}: FormProps) {
    const [inputValues, dispatch ] = useNewUsuarioForm()
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        OnNewSus(inputValues)
        handleClear()
        dispatch({type: "clear"})
    }

    const handleChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target

        dispatch({
            type: "change_value",
            payload:{
                inputName: name,
                inputValue: value
            }
        })
    }
    const handleClear = () =>  {
        dispatch ({type:"clear"})
    }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>Usuario</label>
                <input onChange={handleChange} value={inputValues.nombre_Us} aria-label="nombre_Us" type='text' name='Usuario' placeholder="Usuario" />
                <label>Contraseña</label>
                <input onChange={handleChange} value={inputValues.contraseña} aria-label="contraseña" type='text' name='contraseña' placeholder="Ingrese_contraseña"/>
                
                <button type='submit'>Ingresar</button>
                <button type='submit'>Cancelar</button>
            </form>
        </div>
    )
}

export default Logueo