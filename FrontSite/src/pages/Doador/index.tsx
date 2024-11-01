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
                            <form>
                                <div className={styles.formGroup}>
                                    <label htmlFor="nome" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="nome" placeholder="Seu nome" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="telefone" className="form-label">Telefone</label>
                                    <input type="tel" className="form-control" id="telefone" placeholder="(XX) XXXXX-XXXX" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="tipoDoacao" className="form-label">Doar</label>
                                    <select
                                        className="form-control"
                                        id="tipoDoacao"
                                        value={tipoDoacao}
                                        onChange={handleTipoDoacaoChange}
                                        required
                                    >
                                        <option value="">Selecione uma opção</option>
                                        <option value="pereciveis">Perecíveis</option>
                                        <option value="dinheiro">Dinheiro</option>
                                        <option value="roupas">Roupas</option>
                                        <option value="outros">Outros</option>
                                    </select>
                                </div>

                                {tipoDoacao === "dinheiro" && (
                                    <div className={styles.formGroup}>
                                        <label htmlFor="metodoPagamento" className="form-label">Método de Pagamento</label>
                                        <select className="form-control" id="metodoPagamento" required>
                                            <option value="">Selecione uma opção</option>
                                            <option value="cartao">Cartão de Crédito</option>
                                            <option value="pix">PIX</option>
                                        </select>
                                    </div>
                                )}

                                {tipoDoacao === "outros" && (
                                    <div className={styles.formGroup}>
                                        <label htmlFor="descricaoOutros" className="form-label">Descreva o que vai doar</label>
                                        <textarea
                                            className="form-control"
                                            id="descricaoOutros"
                                            rows={3}
                                            placeholder="Descreva sua doação"
                                            value={outrasOpcoes}
                                            onChange={(e) => setOutrasOpcoes(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                )}

                                <button type="submit" className="btn btn-success">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </LayoutDashboard>
        </>
    );
}
