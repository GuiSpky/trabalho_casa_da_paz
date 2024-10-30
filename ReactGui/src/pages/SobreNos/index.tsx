import { LayoutDashboard } from "../../components/LayoutDashboard"
import styles from './style.module.css'

export default function SobreNos() {


    return(
        <>
            <LayoutDashboard>
            <div className="container">
                 <div className="card">
                    <div className="card-header content-center">
                        <center>
                        <h1>Sobre nós</h1>
                        </center>
                    </div>
                    <div className="card-body">
                        <p>A Associação Assistencial e Promocional Casa da Paz é uma entidade sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.</p>
                        <img 
                        className={styles.fotos}
                        src="src/imagens/Imagem-do-WhatsApp-de-2024-04-15-às-11.54.40_a3bfed76-scaled.jpg" alt=""/>
                        <p>Fundada para responder à urgência da alimentação, a Casa da Paz rapidamente percebeu que a questão era mais ampla. Observamos que muitas crianças estavam vulneráveis nas ruas, enfrentando altos índices de repetência escolar e evasão, e expostas a perigos graves como o tráfico de drogas e a prostituição.</p>
                        <p>Nosso objetivo é proporcionar um ambiente seguro e acolhedor, onde cada jovem possa ter acesso a oportunidades de aprendizado, apoio psicossocial e atividades enriquecedoras. Trabalhamos para oferecer um futuro melhor, garantindo que nossas crianças e adolescentes tenham as ferramentas necessárias para crescer com dignidade e esperança.</p>
                    </div>
                </div>
            </div>
            </LayoutDashboard>
        </>
    )
}