import { useEffect } from "react";
import { LayoutDashboard } from "../../components/LayoutDashboard";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";



export default function Dashboard() {

    const navigate = useNavigate()

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
                    <div className="card-body content-center">
                        <center>
                        <p>“Sei que meu trabalho é uma gota no oceano, 
                            mas sem ele, o oceano seria menor" - Santa Teresa de Calcutá</p>
                            <div>
                                <button className='btn btn-success w-40 m-01' 
                                    style={{
                                        marginRight: 5
                                    }}
                                    onClick={()=>{
                                        navigate(`/sobrenos`)
                                    }}
                                    >Sobre nós</button>
                                <button className='btn btn-outline-dark w-40 m-01'
                                onClick={()=>{
                                    navigate(`/doador`)
                                }}
                                >Seja um doador</button>
                            </div>
                        </center>

                    </div>
                </div>
            </div>

           </LayoutDashboard>
        </>
    )
}