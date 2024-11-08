import { useState } from "react";
import { LayoutDashboard } from "../../components/LayoutDashboard";
import styles from './styles.module.css';

export default function Doador() {
    const [tipoDoacao, setTipoDoacao] = useState("");
    const [outrasOpcoes, setOutrasOpcoes] = useState("");

    const handleTipoDoacaoChange = (event) => {
        setTipoDoacao(event.target.value);
    };

    return (
        <>
            <LayoutDashboard>
                <div className="container">
                    <div className="card">
                        <div className="card-header content-center">
                            <center>
                                <h1>Realizar uma Doação</h1>
                            </center>
                        </div>
                        <div className="card-body">
                            <h2>Ajude a manter a Casa da Paz</h2><br/>
                            <h3>Pix:</h3>
                            <p>Chave CNpJ: 05.509.404/0001-29
                            <br/>
                            <h2>Dados Bancário</h2>
                            <ul>
                                <li><strong>Banco:</strong> SICOOB (756)</li>
                                <li><strong>Agência:</strong> 4379</li>
                                <li><strong>Conta Corrente:</strong> 4586-1</li>
                                <li><strong>CNPJ:</strong> 05.509.404/0001-29</li>
                                <li><strong>Titular:</strong> Associação Assistencial e Promocional Casa da Paz</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </LayoutDashboard>
        </>
    );
}
