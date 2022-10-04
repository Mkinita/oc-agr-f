import usePacientes from'../hooks/usePacientes'



const ListadoPacientes = () => {
  const {pacientes} = usePacientes()
  const {setEdicion, eliminarPaciente} = usePacientes()


  
  
  return (
    
    <>
            <h2 className='font-black text-3xl text-center'>Listado de Ordenes de Compras</h2>

            <p className='text-xl mt-5 mb-10 text-center'>
                    Administra tus  {''}
                    <span className='text-lime-600 font-bold'>Ordenes de Compra</span>
            </p>

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
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Editar</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Eliminar</th>
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
                        <td className="px-2 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                            className="text-green-500 hover:text-green-700"
                            href="#"
                        >
                            <button
                            type="button"
                            className="py-2 px-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                            onClick={() => setEdicion(paciente) }
                            >Editar</button>
                        </a>
                    </td>
                    <td className="px-2 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                            className="text-red-500 hover:text-red-700"
                            href="#"
                        >
                            <button
                            type="button"
                            className="py-2 px-2 text-xs bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                            onClick={() => eliminarPaciente(paciente._id) }
                            >Eliminar</button>
                        </a>
                    </td>
                    </tr>
                    ))}
                </tbody>
                
            </table>
            
            
        </div>
        

       

     </>
        
  )
}

export default ListadoPacientes