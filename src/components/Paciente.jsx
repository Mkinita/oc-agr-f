import usePacientes from "../hooks/usePacientes"


const Paciente = ({paciente}) => {
    const {pacientes , buscaNombrePaciente } = usePacientes()

  const {setEdicion, eliminarPaciente} = usePacientes()

  const{tipo,cliente,numeroOc,producto,solicitado,despacho,suma,_id } = paciente
  


  const formatearFecha = (fecha) => {
    return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format()  
  }


    return (
        

        



        
//  <div className="flex flex-col">
//             <div className="overflow-x-auto">
//                 <div className="p-1.5 w-full inline-block align-middle">
//                     <div className="overflow-hidden border rounded-lg">
//                         <table className="min-w-full divide-y divide-gray-200">
//                             <thead className="bg-gray-50">
//                                 <tr>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                                     >
//                                         Nombre
//                                     </th>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                                     >
//                                         Nº Chip
//                                     </th>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                                     >
//                                         Raza
//                                     </th>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
//                                     >
//                                         Editar
//                                     </th>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
//                                     >
//                                         Eliminar
//                                     </th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-gray-200">
//                                 <tr>
//                                     <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
//                                         {nombre}
//                                     </td>
//                                     <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
//                                         {chip}
//                                     </td>
//                                     <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
//                                         {raza}
//                                     </td>
//                                     <td className="px-2 py-4 text-sm font-medium text-right whitespace-nowrap">
//                                         <a
//                                             className="text-green-500 hover:text-green-700"
//                                             href="#"
//                                         >
//                                             <button
//                                               type="button"
//                                               className="py-2 px-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
//                                               onClick={() => setEdicion(paciente) }
//                                               >Editar</button>
//                                         </a>
//                                     </td>
//                                     <td className="px-2 py-4 text-sm font-medium text-right whitespace-nowrap">
//                                         <a
//                                             className="text-red-500 hover:text-red-700"
//                                             href="#"
//                                         >
//                                             <button
//                                             type="button"
//                                             className="py-2 px-2 text-xs bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
//                                             onClick={() => eliminarPaciente(_id) }
//                                             >Eliminar</button>
//                                         </a>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div> 





        //  <div className="flex flex-col">
        //     <div className="overflow-x-auto">
        //         <div className="p-1.5 w-full inline-block align-middle">
        //             <div className="overflow-hidden border rounded-lg">
        //                 <table className="min-w-full divide-y divide-gray-200">
        //                     <thead className="bg-gray-50">
        //                         <tr className='bg-curso text-white'>
        //                             <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">Nombre</th>
        //                             <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">N° Chip</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {pacientes.map( (paciente) => (

        //                             <tr key={paciente._id}>
        //                                 <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{paciente.nombre}</td>
        //                                 <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{paciente.chip}</td>
        //                                 <td className="px-2 py-4 text-sm font-medium text-right whitespace-nowrap">
        //                                 <a
        //                                     className="text-green-500 hover:text-green-700"
        //                                     href="#"
        //                                 >
        //                                     <button
        //                                       type="button"
        //                                       className="py-2 px-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
        //                                       onClick={() => setEdicion(paciente) }
        //                                       >Editar</button>
        //                                 </a>
        //                             </td>
        //                             <td className="px-2 py-4 text-sm font-medium text-right whitespace-nowrap">
        //                                 <a
        //                                     className="text-red-500 hover:text-red-700"
        //                                     href="#"
        //                                 >
        //                                     <button
        //                                     type="button"
        //                                     className="py-2 px-2 text-xs bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
        //                                     onClick={() => eliminarPaciente(_id) }
        //                                     >Eliminar</button>
        //                                 </a>
        //                             </td>
        //                             </tr>
        //                         ))}
        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>
        //     </div>
        // </div>  

        

            <><h1>hOLA</h1></>

           

        
  )
}

export default Paciente