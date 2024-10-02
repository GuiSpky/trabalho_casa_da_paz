import { useNavigate, useParams } from "react-router-dom"
import { LayoutDashboard } from "../../components/LayoutDashboard"
import { useEffect } from "react";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";



export default function SobreNos() {

    const navigate = useNavigate()

    const handleLogout = () => {
        // Remove o token de autenticação do localStorage ou sessionStorage
        localStorage.removeItem('meusite.token'); 
        navigate('/')
}

    useEffect(()=>{
        let lsToken = localStorage.getItem('meusite.token')

        let token: IToken | null = null

        if(typeof lsToken === 'string'){
            token = JSON.parse(lsToken)
        }
        
        if (!token || verificaTokenExpirado(token.accessToken)){
            navigate('/')
        }

    }, [])

    return(
        <>
            <LayoutDashboard>
            <div className="container">
                 <div className="card">
                    <div className="card-header content-center">
                        <center>
                        <h1>Casa da Paz</h1>
                        </center>
                    </div>
                    <div className="card-body">
                        <p>A Associação Assistencial e Promocional Casa da Paz é uma entidade sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.</p>

                    </div>
                </div>
            </div>
            </LayoutDashboard>
        </>
    )
}