import {createContext, useState, useEffect} from 'react'
import clienteAxios from '../config/axios'


const EmbalajeContext = createContext()


export const EmbalajeProvider = ({children}) =>{

    const [embalajes, setEmbalajes] = useState([])
    const [embalaje, setEmbalaje] = useState({})
    const [listanombre , setListaNombre] = useState([])
    const [texto ,setTexto] =('')
    

    useEffect(() => {
        const obtenerEmbalaje = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config={
                    headers:{
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const {data} = await clienteAxios('/embalaje',config)
                setEmbalajes(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerEmbalaje()
    }, [])

    const guardarEmbalaje = async (embalaje) =>{

        const token = localStorage.getItem('token')
        const config={
             headers:{
             "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        } 

        if(embalaje.id){
           try {
                const{data} = await clienteAxios.put(`/embalaje/${embalaje.id}`,embalaje,config)
                
                const embalajesActualizados = embalajes.map(embalajeState => embalajeState._id ===
                   data._id ? data : embalajeState) 
                   setEmbalajes(embalajesActualizados)
           } catch (error) {
                console.log(error)
           }
        } else{
            try {
                
                const {data} = await clienteAxios.post('/embalaje',embalaje,config)
                const{ createdAt, updatedAt, __v, ...embalajeAlmacenado } = data
                setEmbalajes([embalajeAlmacenado, ...embalajes])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }

    }


    const setEdicion = (embalaje) => {
        setCol(embalaje)
    }

    const eliminarEmbalaje = async id  =>{
        const confirmar = confirm('¿Confirmar que deseas eliminar el registro?')
        if(confirmar){
            try {
                const token = localStorage.getItem('token')
                const config={
                     headers:{
                     "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`
                    }
                } 

                const {data} = await clienteAxios.delete(`/embalaje/${id}`,config)
                const embalajesActualizados =embalajes.filter(embalajeState => embalajeState._id
                    !== id)

                    setEmbalajes(embalajesActualizados)
            } catch (error) {
                console.log(error)
            }
        }
    }




    return(
        <EmbalajeContext.Provider 
            value={{
                embalajes,
                guardarEmbalaje,
                setEdicion,
                embalaje,
                eliminarEmbalaje
            }}
        >
            {children}
        </EmbalajeContext.Provider>
    )
}


export default EmbalajeContext