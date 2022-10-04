import useEmbalaje from'../hooks/useEmbalaje'
import {useState, useEffect} from'react'
import Alerta from './Alerta'

const Detalle = () => {
    const {embalajes} = useEmbalaje()
    const {setEdicion, eliminarEmbalaje} = useEmbalaje()
    const {guardarEmbalaje, embalaje} = useEmbalaje()
  
    const [cliente, setCliente] = useState ('')
    const [armado, setArmado] = useState ('')
    const [calidad, setCalidad] = useState ('')
    const [pintura, setPintura] = useState ('')
    const [img, setImg] = useState ('')
    const [id, setId] = useState(null)

    const [alerta,setAlerta] = useState({})
    





    useEffect(() => {
        if(embalaje?.cliente){
            setCliente(embalaje.cliente)
            setArmado(embalaje.armado)
            setCalidad(embalaje.calidad)
            setPintura(embalaje.pintura)
            setImg(embalaje.img)
            setId(embalaje._id)
        }
    },[embalaje])

   
    
    const handleSubmit =  e => {
        e.preventDefault();

        //validar formulario
        if([cliente,armado,calidad,pintura,img].includes('')){
            setAlerta({
                msg:'Todos los campos son obligatorios',
                error:true
            })
            return
        }

        setAlerta({})
        guardarEmbalaje({cliente,armado,calidad,pintura,img,id})
        setAlerta({
            msg:'Guardado Correctamente'
        })

            setCliente('')
            setArmado('')
            setCalidad('')
            setPintura('')
            setImg('')
            setId('')
    }
    
    const {msg} =alerta


    return (
      
      <>
        <h2 className='font-black text-3xl text-center'>Producto Terminado</h2>
  
          <p className='text-xl mt-5 mb-10 text-center'> Embalaje y  {''}
              <span className='text-lime-600 font-bold'>Pintura</span>
          </p>
          {msg && <Alerta alerta={alerta}/>}

          <form
        className="bg-white py-5 px-2 mb-2 lg:mb-5 shadow-md rounded-md"
        onSubmit={handleSubmit}
        >


            <div className="mb-5 text-center">
                <label htmlFor="cliente" 
                  className="text-gray-700 uppercase font-bold p-2"
                  >Cliente</label>      
                  <input
                  id="tipo"
                    type="text"
                    placeholder="cliente"
                    className="border-2 w-1/4 p-2 mt-2 placeholder-gray-400 
                    rounded-md"
                    value={cliente}
                    onChange={e=> setCliente(e.target.value)}       
                    />
            </div>

            <div className="mb-5 text-center">
                <label htmlFor="embalaj" 
                  className="text-gray-700 uppercase font-bold p-2"
                  >Embalaje</label>      
                  <input
                  id="embalaj"
                    type="text"
                    placeholder="Detalle Embalaje"
                    className="border-2 w-1/4 p-2 mt-2 placeholder-gray-400 
                    rounded-md"
                    value={armado}
                    onChange={e=> setArmado(e.target.value)}       
                    />
            </div>


            <div className="mb-5 text-center">
                <label htmlFor="calidad" 
                  className="text-gray-700 uppercase font-bold p-2"
                  >Calidad</label>      
                  <input
                  id="calidad"
                    type="text"
                    placeholder="calidad"
                    className="border-2 w-1/4 p-2 mt-2 placeholder-gray-400 
                    rounded-md"
                    value={calidad}
                    onChange={e=> setCalidad(e.target.value)}       
                    />
            </div>


            <div className="mb-5 text-center">
                <label htmlFor="pintura" 
                  className="text-gray-700 uppercase font-bold p-2"
                  >Pintura</label>      
                  <input
                  id="pintura"
                    type="text"
                    placeholder="Color Pintura"
                    className="border-2 w-1/4 p-2 mt-2 placeholder-gray-400 
                    rounded-md"
                    value={pintura}
                    onChange={e=> setPintura(e.target.value)}       
                    />
            </div>



            <div className="mb-5 text-center">
                <label htmlFor="img" 
                  className="text-gray-700 uppercase font-bold p-2"
                  >Img</label>      
                  <input
                  id="img"
                    type="text"
                    placeholder="iMG"
                    className="border-2 w-1/4 p-2 mt-2 placeholder-gray-400 
                    rounded-md"
                    value={img}
                    onChange={e=> setImg(e.target.value)}       
                    />
            </div>

            <div className=' m-0  text-center'>
              <input
                type="submit"
                className="w-1/4 bg-lime-600  p-3 text-white
                uppercase font-bold hover:bg-lime-700 cursor-pointer
                transition-colors rounded-xl"
                value={ id ? 'Guardar Cambios' : "Agregar"}
              />
            </div>
            

          </form>

          
          


                        
  
        </>
          
    )
  }
export default Detalle



            {/* <input placeholder="Select a category" type="text" list="categories" name="category" />
<datalist id="categories">
      <option name="table1" value="1"  selected="true" disabled="disabled">Select A Category</option>
      <option name="category1" value="general">General</option>
      <option name="Category2" value="tech">Tech</option>
</datalist> */}