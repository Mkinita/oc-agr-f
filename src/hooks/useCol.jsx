import {useContext} from 'react'
import  ColContext  from '../context/ColProvider'

const useCol = () =>{

    return useContext(ColContext)
}


export default useCol