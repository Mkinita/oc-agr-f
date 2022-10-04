import {useContext} from 'react'
import  RemaContext  from '../context/RemaProvider'

const useRema = () =>{

    return useContext(RemaContext)
}


export default useRema