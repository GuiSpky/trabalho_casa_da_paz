import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Voluntario from './pages/Voluntario'
import SobreNos from './pages/SobreNos'
import Doador from './pages/Doador'
import Galeria from './pages/Galeria'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* www.google.com.br/profchines */}
                <Route
                    path='/'
                    element={<Dashboard />}
                />
                <Route
                    path='/voluntario'
                    element={<Voluntario/>}
                    />
                <Route
                    path='/sobrenos'
                    element={<SobreNos/>}
                    />
                <Route
                    path='/doador'
                    element={<Doador/>}
                    />
                <Route
                    path='/galeria'
                    element={<Galeria/>}
                    />
            </Routes>
        </BrowserRouter>
    )
}