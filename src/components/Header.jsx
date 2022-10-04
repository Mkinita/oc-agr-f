import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {
  const {cerrarSesion} = useAuth()
  return (
    <header className="py-10 bg-lime-600">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className=" text-2xl text-center text-white font-black">Control de Pedidos{''}
                {/* <span className="text-white font-black">Control de Pedidos</span>  */}
            </h1>

            <nav className="flex lg:flex-row gap-4 mt-5 lg:mt-0">
                <Link to="/admin"className="text-white text-sm uppercase font-bold">Listado O.C.</Link>
                <Link to="/admin/detalle"className="text-white text-sm uppercase font-bold">Detalle Terminado</Link>
                <Link to="/admin/perfil"className="text-white text-sm uppercase font-bold">Perfil</Link>
            

                <button type="button"
                className="text-white text-sm uppercase font-bold"
                  onClick= {cerrarSesion}
                  >cerrar sesión  
                </button>
            
            
            </nav>

        </div>

    </header>
  )
}

export default Header