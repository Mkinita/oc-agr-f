import {useState} from 'react'
import Formulario from "../components/Formulario"
import FormularioRema from "../components/FormularioRema"
import FormularioCol from "../components/FormularioCol"
import ListadoPacientes from "../components/ListadoPacientes"
import ListadoRema from "../components/ListadoRema"
import ListadoCol from "../components/ListadoCol"


const AdministrarPacientes = () => {

  const [ mostrarFormulario,setMostrarFormulario] = useState(false)
  const [ mostrarFormularioRema,setMostrarFormularioRema] = useState(false)
  const [ mostrarFormularioCol,setMostrarFormularioCol] = useState(false)

  
  return (

        
      <div className="">
        {/* flex flex-col md:flex-row */}

         <h2 className='font-black text-3xl text-center'>Administrador de O.C.</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
                  Agrega tus O.C. y {''}
              <span className='text-lime-600 font-bold'>Administralas</span>
          </p>
      <div className='text-center'>
         <button
            type="button"
            className='bg-lime-600 hover:bg-lime-700 rounded-xl text-white font-bold uppercase mx-2 p-3 mb-10 md:visible'
            onClick={()=> setMostrarFormulario(!mostrarFormulario)}
          >{mostrarFormulario? 'Ocultar': 'Ingresar O.C Ind'}</button>

          <button
            type="button"
            className='bg-lime-600 hover:bg-lime-700 rounded-xl text-white font-bold uppercase mx-2 p-3 mb-10 md:visible'
            onClick={()=> setMostrarFormularioRema(!mostrarFormularioRema)}
          >{mostrarFormularioRema? 'Ocultar': 'Ingresar O.C Rema'}</button>



          <button
            type="button"
            className='bg-lime-600 hover:bg-lime-700 rounded-xl text-white font-bold uppercase mx-2 p-3 mb-10 md:visible'
            onClick={()=> setMostrarFormularioCol(!mostrarFormularioCol)}
          >{mostrarFormularioCol? 'Ocultar': 'Ingresar O.C Col'}</button>


</div>

          <div className={`${mostrarFormulario ? 'block'  : 'hidden'}`}>
          {/* md:block md:w-1/1 */}
            <Formulario/>
          </div>

          <div className={`${mostrarFormularioRema ? 'block'  : 'hidden'}`}>  
          {/* md:w-1/2 lg:w-3/5 */}
            <FormularioRema/>
          </div>

          <div className={`${mostrarFormularioCol ? 'block'  : 'hidden'}`}>  
          {/* md:w-1/2 lg:w-3/5 */}
            <FormularioCol/>
          </div>

          <div className="">  
          {/* md:w-1/2 lg:w-3/5 */}
            <ListadoPacientes/>
          </div>

          <div className="">  
          {/* md:w-1/2 lg:w-3/5 */}
            <ListadoRema/>
          </div>

          <div className="">  
          {/* md:w-1/2 lg:w-3/5 */}
            <ListadoCol/>
          </div>


          
      </div>
  )
}

export default AdministrarPacientes