import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Produto from './pages/Produto'
import PageExampleState from './pages/PageExampleState'
import Voluntario from './pages/Voluntario'
import Usuarios from './pages/Usuario'
import GerenciarUsuarios from './pages/Usuario/Gerenciar'
import SobreNos from './pages/SobreNos'
import Doador from './pages/Doador'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* www.google.com.br/profchines */}
                <Route
                    path='/'
                    element={<Login />}
                />

                <Route
                    path='/dashboard'
                    element={<Dashboard />}
                />

                <Route
                    path='/produto/:id'
                    element={<Produto />}
                />

                <Route
                    path='/example'
                    element={<PageExampleState />}
                />
                <Route
                    path='/voluntario'
                    element={<Voluntario/>}
                    />
                <Route  
                    path='/usuarios'
                    element={<Usuarios />}
                    />
                <Route
                    path='/usuarios/:id'
                    element={<GerenciarUsuarios />}
                    />
                <Route
                    path='/sobrenos'
                    element={<SobreNos/>}
                    />
                <Route
                    path='/doador'
                    element={<Doador/>}
                    />
            </Routes>
        </BrowserRouter>
    )
}