import { Carousel } from "react-bootstrap";
import { LayoutDashboard } from "../../components/LayoutDashboard";
import { useNavigate } from "react-router-dom";
import styles from './style.module.css'


export default function Dashboard() {

    const navigate = useNavigate()

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

                        <div>
                            <Carousel>
                                <Carousel.Item>
                                <img
                                    className={styles.fotos}
                                    src="public/imagens/DSC_0701.jpg"
                                    alt="Frente com integrantes da Faculdade"
                                />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img
                                    className={styles.fotos}
                                    src="public/imagens/Imagem-do-WhatsApp-de-2024-04-15-às-11.54.40_a3bfed76-scaled.jpg"
                                    alt="Frente sem ninguem"
                                />
                                </Carousel.Item>
                            </Carousel>
                            </div>

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