import {useState, useEffect} from'react'
import Alerta from './Alerta'
import usePacientes from '../hooks/usePacientes'

const Formulario = () => {
    const [tipo, setTipo] = useState ('CENTRAL')
    const [cliente, setCliente] = useState ('')
    const [numeroOc, setNumeroOc] = useState ('')
    const [producto, setProducto] = useState ('')
    const [id, setId] = useState(null)

    const[numero1,setNumero1]=useState({
        uno:0
    })
    const[numero2,setNumero2]=useState({
        dos:0
    })

    const[suma,setSuma]=useState();

    const [alerta,setAlerta] = useState({})
    

    const {guardarPaciente, paciente} = usePacientes()



    useEffect(() => {
        if(paciente?.tipo){
            setTipo(paciente.tipo)
            setCliente(paciente.cliente)
            setNumeroOc(paciente.numeroOc)
            setProducto(paciente.producto)
            setSuma(paciente.suma)
            setNumero1(paciente.numero1)
            setId(paciente._id)
        }
    },[paciente])

   
    
    const handleSubmit =  e => {
        e.preventDefault();

        //validar formulario
        if([tipo,cliente,numeroOc,producto,suma,numero1].includes('')){
            setAlerta({
                msg:'Todos los campos son obligatorios',
                error:true
            })
            return
        }

        setAlerta({})
        guardarPaciente({tipo,cliente,numeroOc,producto,suma,numero1,id})
        setAlerta({
            msg:'Guardado Correctamente'
        })

            setTipo('')
            setCliente('')
            setNumeroOc('')
            setProducto('')
            setSuma('')
            setNumero1('')
            setId('')
    }
    
    const {msg} =alerta



    

    useEffect(()=>{
        const {uno}=numero1
        const {dos}=numero2
        setSuma(Number(uno)-Number(dos))
    },[numero1],[numero2])


   

    const sumar =(event)=>{
        const{name,value}=event.target
        setNumero1({...numero1,[name]:value})
        setNumero2({...numero2,[name]:value})
    }

    const FileInput = () => { 
        return <input accept ="image/*" type ="file" id ="select-image" />; 
      };
     
      

  return (
    <>

    
    
    <h3 className='font-black text-3xl text-center'>IND</h3>
        <form
        className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
        onSubmit={handleSubmit}
        >
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table>
            <thead>
                <tr>
                    <th>
                    
                        <div className="mb-5">
                            <label htmlFor="tipo" 
                            className="text-gray-700 uppercase font-bold"
                            >Calidad</label>
                            
                            <input
                            id="tipo"
                            type="text"
                            placeholder="Calidad"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 
                            rounded-md"
                            value={tipo}
                            onChange={e=> setTipo(e.target.value)}
                            
                            />
                        </div>
                    </th>
                    <th>
                        <div className="mb-5">
                            <label htmlFor="cliente" 
                            className="text-gray-700 uppercase font-bold"
                            >Cliente</label>
                            <input
                            id="cliente"
                            type="text"
                            placeholder="Cliente"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 
                            rounded-md"
                            value={cliente}
                            onChange={e=> setCliente(e.target.value)}
                            />
                        </div>
                    </th>

                    <th>
                        <div className="mb-5">
                            <label htmlFor="numeroOc" 
                            className="text-gray-700 uppercase font-bold"
                            >Numero</label>
                            <input
                            id="numeroOc"
                            type="text"
                            placeholder="Numero Oc"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 
                            rounded-md"
                            value={numeroOc}
                            onChange={e=> setNumeroOc(e.target.value)}
                            />
                        </div>
                    </th>

                    <th>
                        <div className="mb-5">
                            <label htmlFor="producto" 
                            className="text-gray-700 uppercase font-bold"
                            >Producto</label>
                            <input
                            id="producto"
                            type="text"
                            placeholder="Detalle del Producto"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 
                            rounded-md"
                            value={producto}
                            onChange={e=> setProducto(e.target.value)}
                            />
                        </div>
                    </th>
                    <th>
                        <div className="mb-5">
                            <label htmlFor="numero1" 
                            className="text-gray-700 uppercase font-bold"
                            >Solicitado</label>
                            <input
                                type="number" 
                                placeholder="m³ Solicitados"
                                className="border-2 w-full p-2 mt-2 placeholder-gray-400 
                                rounded-md"
                                name="uno"
                                onChange={sumar} 
                                value={numero1.uno}
                            />
                        </div>
                    </th>
                    <th>
                        <div className="mb-5">
                            <label htmlFor="mumero2" 
                            className="text-gray-700 uppercase font-bold"
                            >Despacho</label>
                            <input
                                type="number" 
                                placeholder="m³ Despacho"
                                className="border-2 w-full p-2 mt-2 placeholder-gray-400 
                                rounded-md"
                                name="dos"
                                onChange={sumar} 
                                value={numero2.dos}
                            />
                        </div>
                    </th>
                    <th>
                        <div className="mb-5">
                            <label htmlFor="suma" 
                            className="text-gray-700 uppercase font-bold"
                            >Saldo</label>
                            <input
                            id="suma"
                            type="suma"
                            placeholder="m³ despacho"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 
                            rounded-md"
                            name="resultado"
                            value={suma} 
                            onChange={e=> setSuma(e.target.value)}
                            />
                        </div>
                    </th>
                </tr>
            </thead>
        </table>
        </div>

        <div className=' m-0 content-center'>
            <input
                type="submit"
                className="bg-lime-600 w-full p-3 text-white
                uppercase font-bold hover:bg-lime-700 cursor-pointer
                transition-colors rounded-xl"
                value={ id ? 'Guardar Cambios' : "Agregar Orden de Compra"}
            />
        </div>


        
                
            </form>
            {msg && <Alerta alerta={alerta}/>}
    </>

    
  )
 
}

export default Formulario