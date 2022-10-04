import useRema from'../hooks/useRema'



const ListadoRema = () => {
  const {remas} = useRema()
  const {setEdicion, eliminarRema} = useRema()


  
  
  return (
    
    <>


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
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">Editar</th>
                        <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-200 uppercase ">Eliminar</th>
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
                        <td className="px-2 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                            className="text-green-500 hover:text-green-700"
                            href="#"
                        >
                            <button
                            type="button"
                            className="py-2 px-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                            onClick={() => setEdicion(rema) }
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
                            onClick={() => eliminarRema(rema._id) }
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

export default ListadoRema