import useCol from'../hooks/useCol'



const ListadoCol = () => {
  const {cols} = useCol()
  const {setEdicion, eliminarCol} = useCol()


  
  
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
                    {cols.map( (col) => (

                    <tr key={col._id} className='dark:bg-gray-100  hover:bg-lime-600 uppercase'>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap ">{col.tipo}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.cliente}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.numeroOc}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.producto}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.numero1.uno}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.numero1.dos}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{col.suma}</td>                 
                        <td className="px-2 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                            className="text-green-500 hover:text-green-700"
                            href="#"
                        >
                            <button
                            type="button"
                            className="py-2 px-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                            onClick={() => setEdicion(col) }
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
                            onClick={() => eliminarCol(col._id) }
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

export default ListadoCol