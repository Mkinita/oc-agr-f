import {BrowserRouter , Routes, Route} from'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import RutaProtegida from './layout/RutaProtegida'


import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import NuevoPassword from './paginas/NuevoPassword'
import AdministrarPacientes from './paginas/AdministrarPacientes'
import EditarPerfil from './paginas/EditarPerfil'
import CambiarPassword from './paginas/CambiarPassword'
import AdministrarTermiando from './paginas/AdministrarTermiando'
import Informe from './paginas/Informe'
import Pintura from './paginas/Pintura'



import {AuthProvider}  from './context/AuthProvider'
import {PacientesProvider}  from './context/PacientesProvider'
import {RemaProvider}  from './context/RemaProvider'
import {ColProvider}  from './context/ColProvider'
import {EmbalajeProvider}  from './context/EmbalajeProvider'



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
        <RemaProvider>
        <ColProvider>
        <EmbalajeProvider>
          <Routes>
              <Route path="/" element ={<AuthLayout />} >
                  <Route index element={<Login />} />
                  <Route path="registrar" element={<Registrar />} />
                  <Route path="olvide-password" element={<OlvidePassword />} />
                  <Route path="olvide-password/:token" element={<NuevoPassword />} />
                  <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
              </Route>
                    
              <Route path="/admin" element={<RutaProtegida/>}>
                <Route index element={<AdministrarPacientes/>} />
                <Route path="perfil"element={<EditarPerfil/>} />
                <Route path="detalle"element={<AdministrarTermiando/>} />
                <Route path="cambiar-password"element={<CambiarPassword/>} />
              </Route>

              <Route path="/admin">
              <Route path="informe"element={<Informe/>} />
              <Route path="pintura"element={<Pintura/>} />
              </Route>



          </Routes>
        </EmbalajeProvider>
        </ColProvider> 
        </RemaProvider> 
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
