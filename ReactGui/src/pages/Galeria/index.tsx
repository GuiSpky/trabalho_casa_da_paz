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
                                src="src/imagens/DSC_0701.jpg"
                                alt="Frente com integrantes da Faculdade"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className={styles.fotos}
                                src="src/imagens/DSC_0663.jpg"
                                alt="Frente sem ninguem"
                            />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    </center>

                    </div>
                </div>
            </div>
            </LayoutDashboard>
        </>
    )
}