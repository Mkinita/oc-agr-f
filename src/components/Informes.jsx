import usePacientes from'../hooks/usePacientes'
import useRema from'../hooks/useRema'
import useCol from'../hooks/useCol'

const Informes = () => {
    const {pacientes} = usePacientes()
    const {remas} = useRema()
    const {cols} = useCol()
  return (
    
    <>
              <img className="md:0 md:mx-auto border-8 border-transparent" src="../public/img/logo.jpg"/>
              <h2 className='font-black text-3xl text-center'>Listado de Ordenes de Compras</h2>
              
    <div className='p-10'>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">Tipo</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Cliente</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">N° OC</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Producto</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Solicitados</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Desapacho</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                    {pacientes.map( (paciente) => (

                    <tr key={paciente._id} className='dark:bg-gray-100  hover:bg-lime-600 uppercase'>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap ">{paciente.tipo}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{paciente.cliente}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{paciente.numeroOc}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{paciente.producto}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{paciente.numero1.uno}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{paciente.numero1.dos}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{paciente.suma}</td>                                    
                    </tr>
                    ))}
                </tbody>
                
            </table>
            
            
        </div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase">Tipo</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">Cliente</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">N° OC</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">Producto</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">Solicitados</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">Desapacho</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                    {remas.map( (rema) => (

                    <tr key={rema._id} className='dark:bg-gray-100  hover:bg-lime-600 uppercase'>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap ">{rema.tipo}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{rema.cliente}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{rema.numeroOc}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{rema.producto}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{rema.numero1.uno}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{rema.numero1.dos}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{rema.suma}</td>                                    
                    </tr>
                    ))}
                </tbody>
                
            </table>
            
            
        </div>


        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase">Tipo</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">Cliente</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">N° OC</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">Producto</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">Solicitados</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">Desapacho</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cols.map( (col) => (

                    <tr key={col._id} className='dark:bg-gray-100  hover:bg-lime-600 uppercase'>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap ">{col.tipo}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.cliente}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.numeroOc}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.producto}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.numero1.uno}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.numero1.dos}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.suma}</td>                                    
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