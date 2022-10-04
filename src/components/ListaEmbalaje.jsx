import useEmbalaje from'../hooks/useEmbalaje'

const ListaEmbalaje = () => {

    const {embalajes} = useEmbalaje()
    const {setEdicion, eliminarEmbalaje} = useEmbalaje()

  return (
    <>
    <h2 className='font-black text-3xl text-center'>Informacion</h2>

    <div className='text-center-test lg:px-16 px-16'>
                            {embalajes.map( (embalaje) => (
                                <div key={embalaje._id} className='flex flex-col md:flex-row'>
                                <div className="md:container md:mx-auto"><img src={`/img/${embalaje.img}`}/></div>
                                <div className="md:w-1/2 lg:w-3/5 py-1 md:py-10 text-center-test lg:px-16 px-6 text-2xs uppercase">{embalaje.cliente}</div>
                                <div className="md:w-1/2 lg:w-full py-1 md:py-10 text-center-test lg:px-16 px-6 text-2xs uppercase">{embalaje.armado}</div>
                                <div className="md:w-1/2 lg:w-3/5 py-1 md:py-10 text-center-test lg:px-16 px-6 text-2xs uppercase">{embalaje.calidad}</div>
                                <div className="md:w-1/2 lg:w-3/5 py-1 md:py-10 text-center-test lg:px-16 px-6 text-2xs uppercase"><p>Pintura</p>{embalaje.pintura}</div>
                                </div>
                                ))}

    </div>


                                


    </>
  )
}

export default ListaEmbalaje