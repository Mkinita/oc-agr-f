import {useContext} from 'react'
import  EmbalajeContext  from '../context/EmbalajeProvider'

const useEmbalaje = () =>{

    return useContext(EmbalajeContext)
}


export default useEmbalaje