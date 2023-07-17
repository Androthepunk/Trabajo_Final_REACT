import useNewUsuarioForm from '../../hooks/useNewUsuarioForm'
import { Usuario } from './Usuario'

interface FormProps {
    children: React.ReactNode
    OnNewSus: (newSus: Usuario) => void
}

function FormUsuario({OnNewSus}: FormProps) {
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
                <label>Apellido</label>
                <input onChange={handleChange} value={inputValues.apellido} aria-label="Apellido" type='text' name='apellido' placeholder="Apellido" />
                <label>Nombre</label>
                <input onChange={handleChange} value={inputValues.nombre} aria-label="Nombre" type='text' name='nombre' placeholder="Ingrese_Nombre"/>
                <label>Correo Electrónico</label>
                <input onChange={handleChange} value={inputValues.correo} aria-label="correo" type='text' name='correo' placeholder="Ingrese Correo"/>
                <label>Contraseña</label>
                <input onChange={handleChange} value={inputValues.contraseña} aria-label="contraseña" type='text' name='contraseña' placeholder="Ingrese contraseña"/>
                <label>Repita Contraseña</label>
                <input onChange={handleChange} value={inputValues.contraseña} aria-label="contraseña" type='text' name='contraseña' placeholder="Repita contraseña"/>
                <label>Permisos</label>
                <input onChange={handleChange} value={inputValues.permisos} aria-label="Permisos" type='text' name='permisos' placeholder="permisos"/>
                <button type='submit'>Registrar</button>
                <button type='submit'>Cancelar</button>
            </form>
        </div>
    )
}

export default FormUsuario