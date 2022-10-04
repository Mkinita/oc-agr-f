import {useState} from 'react'
import DetallePintura from "../components/DetallePintura"
import ListaEmbalaje from "../components/ListaEmbalaje"


const AdministrarTermiando = () => {

  const [ mostrarFormulario,setMostrarFormulario] = useState(false)
  return (
    <>
    <div className='text-center'>
     <button
            type="button"
            className='bg-lime-600 hover:bg-lime-700 rounded-xl text-white font-bold uppercase mx-2 p-3 mb-10 md:visible'
            onClick={()=> setMostrarFormulario(!mostrarFormulario)}
          >{mostrarFormulario? 'Ocultar': 'Ingresar'}</button>

        <div className={`${mostrarFormulario ? 'block'  : 'hidden'}`}>
          {/* md:block md:w-1/1 */}
            <DetallePintura/>
        </div>

        <br/>

          <ListaEmbalaje/>

    </div>
    </>
  )
}

export default AdministrarTermiando