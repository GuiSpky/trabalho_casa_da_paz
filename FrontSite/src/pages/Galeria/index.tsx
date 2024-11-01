import { Carousel } from "react-bootstrap"
import { LayoutDashboard } from "../../components/LayoutDashboard"
import styles from './style.module.css'


export default function Galeria() {


    return(
        <>
            <LayoutDashboard>
            <div className="container">
                 <div className="card">
                    <div className="card-header content-center">
                        <center>
                        <h1>Galeria</h1>
                        </center>
                    </div>
                    <div className="card-body">
                    <center>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                            <img
                                className={styles.fotos}
                                src="src/imagens/galeriaEventos/DSC_0431 (1).jpg"
                                alt="Frente com integrantes da Faculdade"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className={styles.fotos}
                                src="src/imagens/galeriaEventos/DSC_0433.jpg"
                                alt="Frente sem ninguem"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className={styles.fotos}
                                src="src/imagens/galeriaEventos/DSC_0559.jpg"
                                alt="Frente sem ninguem"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className={styles.fotos}
                                src="src/imagens/galeriaEventos/DSC_0650.jpg"
                                alt="Frente sem ninguem"
                            />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <br/>
                    <h1>Linha do tempo</h1>
                    <br/>

                    <h4>Aniversariantes da Casa da Paz – Junho/2024</h4>
                    <figure className="wp-block-gallery columns-2 is-cropped">
                        <ul className="blocks-gallery-grid">
                            <li className="blocks-gallery-item">
                                <figure>
                                <li className="blocks-gallery-item">
                                <img
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                className="wb-imaga-1653"
                                src="src/imagens/niver_junho/Imagem-do-WhatsApp-de-2024-08-06-às-08.18.36_5c20041b-1.jpg" alt="" 
                                />
                                </li>
                                </figure>
                            </li>
                            <li className="blocks-gallery-item">
                                <figure>
                                <li className="blocks-gallery-item">
                                <img
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                className="wb-imaga-1653"
                                src="src/imagens/niver_junho/Imagem-do-WhatsApp-de-2024-08-06-às-08.18.36_5c20041b-1.jpg" alt="" 
                                />
                                </li>
                                </figure>
                            </li>
                        </ul>
                    </figure>
                    



                    {/* <img 
                    className={styles.foto1}
                    src="src/imagens/niver_junho/Imagem-do-WhatsApp-de-2024-08-06-às-08.18.36_4668644d-1.jpg" alt="" />
                    <img 
                    className={styles.foto1}
                    src="src/imagens/niver_junho/Imagem-do-WhatsApp-de-2024-08-06-às-08.18.36_c6336698.jpg" alt="" />
                    <img 
                    className={styles.foto1}
                    src="src/imagens/niver_junho/Imagem-do-WhatsApp-de-2024-08-06-às-08.18.37_8995dc89.jpg" alt="" /> */}

                    </center>
                    </div>
                </div>
            </div>
            </LayoutDashboard>
        </>
    )
}