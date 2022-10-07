import usePacientes from'../hooks/usePacientes'
import useRema from'../hooks/useRema'
import useCol from'../hooks/useCol'

const Informes = () => {
    const {pacientes} = usePacientes()
    const {remas} = useRema()
    const {cols} = useCol()
  return (
    
    <>          
            
              <img className="md:0 md:mx-auto border-8 border-transparent" src="/img/logo.jpg"/>
              <h2 className='font-black text-3xl text-center border-8 border-transparent'>Listado de Ordenes de Compras</h2>

  
           
        <div  class="text-center">
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
                                <tr>
                                <th scope="col" className="w-1/7 p-2 text-center text-xs text-black">Tipo</th>
                                <th  scope="col" className="w-1/7 p-2 text-center text-xs text-black">Cliente</th>
                                <th  scope="col" className="w-1/7 p-2 text-center text-xs text-black">OC</th>
                                <th  scope="col" className="w-1/7 p-2 text-center text-xs text-black">Producto</th>
                                <th  scope="col" className="w-1/7 p-2 text-center text-xs text-black">Solic.</th>
                                <th  scope="col" className="w-1/7 p-2 text-center text-xs text-black">Desap.</th>
                                <th  scope="col" className="w-1/7 p-2 text-center text-xs text-black">sal.</th>
                                </tr>
                            </thead>
                            <tbody>
                            {pacientes.map( (paciente) => (

                            <tr key={paciente._id} className='dark:bg-gray-100  hover:bg-lime-600 uppercase'>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap ">{paciente.tipo}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{paciente.cliente}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{paciente.numeroOc}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{paciente.producto}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{paciente.numero1.uno}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{paciente.numero1.dos}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{paciente.suma}</td>                                    
                            </tr>
                            ))}
                        </tbody>
                        
                    </table>


                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
                               
                            </thead>
                            <tr>
                                <th scope="col" className="w-1/7 text-center text-xs text-white">Tipo</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">Cliente</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">OC</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">Producto</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">Solic.</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">Desap.</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">sal.</th>
                                </tr>
                            <tbody>
                            {remas.map( (useRema) => (
                            <tr key={useRema._id} className='dark:bg-gray-100  hover:bg-lime-600 uppercase'>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap ">{useRema.tipo}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{useRema.cliente}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{useRema.numeroOc}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{useRema.producto}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{useRema.numero1.uno}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{useRema.numero1.dos}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{useRema.suma}</td>                                    
                            </tr>
                            ))}
                        </tbody>

                        
                        
                    </table>

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
                            </thead>
                            <tr>
                                <th scope="col" className="w-1/7 text-center text-xs text-white">Tipo</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">Cliente</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">OC</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">Producto</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">Solic.</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">Desap.</th>
                                <th  scope="col" className="w-1/7 text-center text-xs text-white">sal.</th>
                                </tr>
                            <tbody>
                            {cols.map( (col) => (

                            <tr key={col._id} className='dark:bg-gray-100  hover:bg-lime-600 uppercase'>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap ">{col.tipo}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{col.cliente}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{col.numeroOc}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{col.producto}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{col.numero1.uno}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{col.numero1.dos}</td>
                                <td className="w-1/7 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{col.suma}</td>                                    
                            </tr>
                            ))}
                        </tbody>
                        
                    </table>
                </div>
        </div>       

        
    </>
  )
}

export default Informes