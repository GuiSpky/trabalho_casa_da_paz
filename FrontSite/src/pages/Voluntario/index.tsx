import { useCallback, useRef } from "react";
import styles from './styles.module.css';
import { LayoutDashboard } from "../../components/LayoutDashboard";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface IForm {
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    habilidades: string;
}

export default function Voluntario() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IForm>();

    const refForm = useRef<any>();
    const navigate = useNavigate();

    const submitForm: SubmitHandler<IForm> = useCallback((data) => {
        axios.post(import.meta.env.VITE_URL + '/voluntarios', data)
            .then((res) => {
                navigate('/voluntario');
            })
            .catch((err) => {
                console.log(err);
            });
    }, [navigate]);

    return (
        <>
            <LayoutDashboard>
            <div className="container">
                 <div className="card">
                    <div className="card-header content-center">

                    <div className={styles.centeredText}>
                    <h1>Voluntários</h1>
                    <p>Seja um Voluntário</p>
                </div>
                    <div className="card-body">
                    <form
                    className="row g-3 needs-validation mb-3"
                    noValidate
                    action="127.0.0.1:8000/criarVoluntario"
                    method="POST"
                    ref={refForm}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Nome completo"
                            id="nome"
                            required
                            {...register('nome', { required: 'Nome é obrigatório' })} />
                        <div className="invalid-feedback">
                            {errors.nome && errors.nome.message}
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input type="tel"
                            className="form-control"
                            placeholder="(44) 12354-9582"
                            id="telefone"
                            required
                            {...register('telefone', { required: 'Telefone é obrigatório' })} />
                        <div className="invalid-feedback">
                            {errors.telefone && errors.telefone.message}
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="endereco" className="form-label">Endereço</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Rua, Número, Bairro"
                            id="endereco"
                            required
                            {...register('endereco', { required: 'Endereço é obrigatório' })} />
                        <div className="invalid-feedback">
                            {errors.endereco && errors.endereco.message}
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="habilidades" className="form-label">Cite suas habilidades</label>
                        <textarea
                            className="form-control"
                            placeholder="Diga seu forte, a área que você possui mais desenvolvimento, o que pode fazer para colaborar conosco."
                            id="habilidades"
                            rows={3}
                            required
                            {...register('habilidades', { required: 'Habilidades são obrigatórias' })}></textarea>
                        <div className="invalid-feedback">
                            {errors.habilidades && errors.habilidades.message}
                        </div>
                    </div>

                    <div className="col-md-12">
                        <button type="submit" className="btn btn-success">Enviar</button>
                    </div>
                </form>

                    </div>
               
                    </div>
                </div>
            </div>
                
            </LayoutDashboard>
        </>
    );
}
