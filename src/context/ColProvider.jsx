import {createContext, useState, useEffect} from 'react'
import clienteAxios from '../config/axios'


const ColContext = createContext()


export const ColProvider = ({children}) =>{

    const [cols, setCols] = useState([])
    const [col, setCol] = useState({})
    const [listanombre , setListaNombre] = useState([])
    const [texto ,setTexto] =('')
    

    useEffect(() => {
        const obtenerCol = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config={
                    headers:{
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const {data} = await clienteAxios('/col',config)
                setCols(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerCol()
    }, [])

    const guardarCol = async (col) =>{

        const token = localStorage.getItem('token')
        const config={
             headers:{
             "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        } 

        if(col.id){
           try {
                const{data} = await clienteAxios.put(`/col/${col.id}`,col,config)
                
                const colsActualizados = cols.map(colState => colState._id ===
                   data._id ? data : pacienteState) 
                   setCols(colsActualizados)
           } catch (error) {
                console.log(error)
           }
        } else{
            try {
                
                const {data} = await clienteAxios.post('/col',col,config)
                const{ createdAt, updatedAt, __v, ...colAlmacenado } = data
                setCols([colAlmacenado, ...cols])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }

    }


    const setEdicion = (col) => {
        setCol(col)
    }

    const eliminarCol = async id  =>{
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

                const {data} = await clienteAxios.delete(`/col/${id}`,config)
                const colsActualizados =cols.filter(colsState => colsState._id
                    !== id)

                    setCols(colsActualizados)
            } catch (error) {
                console.log(error)
            }
        }
    }




    return(
        <ColContext.Provider 
            value={{
                cols,
                guardarCol,
                setEdicion,
                col,
                eliminarCol
            }}
        >
            {children}
        </ColContext.Provider>
    )
}


export default ColContext