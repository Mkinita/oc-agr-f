import {createContext, useState, useEffect} from 'react'
import clienteAxios from '../config/axios'


const RemaContext = createContext()


export const RemaProvider = ({children}) =>{

    const [remas, setRemas] = useState([])
    const [rema, setRema] = useState({})
    const [listanombre , setListaNombre] = useState([])
    const [texto ,setTexto] =('')
    

    useEffect(() => {
        const obtenerRema = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config={
                    headers:{
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const {data} = await clienteAxios('/rema',config)
                setRemas(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerRema()
    }, [])

    const guardarRema = async (rema) =>{

        const token = localStorage.getItem('token')
        const config={
             headers:{
             "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        } 

        if(rema.id){
           try {
                const{data} = await clienteAxios.put(`/rema/${rema.id}`,rema,config)
                
                const remasActualizados = remas.map(remaState => remaState._id ===
                   data._id ? data : pacienteState) 
                   setRemas(remasActualizados)
           } catch (error) {
                console.log(error)
           }
        } else{
            try {
                
                const {data} = await clienteAxios.post('/rema',rema,config)
                const{ createdAt, updatedAt, __v, ...remaAlmacenado } = data
                setRemas([remaAlmacenado, ...remas])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }

    }


    const setEdicion = (rema) => {
        setRema(rema)
    }

    const eliminarRema = async id  =>{
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

                const {data} = await clienteAxios.delete(`/rema/${id}`,config)
                const remasActualizados =remas.filter(remasState => remasState._id
                    !== id)

                    setRemas(remasActualizados)
            } catch (error) {
                console.log(error)
            }
        }
    }




    return(
        <RemaContext.Provider 
            value={{
                remas,
                guardarRema,
                setEdicion,
                rema,
                eliminarRema
            }}
        >
            {children}
        </RemaContext.Provider>
    )
}


export default RemaContext