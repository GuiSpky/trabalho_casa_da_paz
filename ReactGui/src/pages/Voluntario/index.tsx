import { useCallback, useEffect, useRef } from "react";
import { LayoutDashboard } from "../../components/LayoutDashboard";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface IForm {
    nome: string
    email: string
}

export default function Voluntario() {

    const{
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IForm>()

    const refForm = useRef<any>()
    
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

    const submitForm: SubmitHandler<IForm> = useCallback((data) => {
        axios.post(import.meta.env.VITE_URL+'/voluntarios',
            data
        )
        .then((res)=>{
            navigate('/voluntario')
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


    return(
        <>
           <LayoutDashboard>
                <h1>Voluntários</h1>
                <p>Seja um Voluntário</p>

                <form
                    className="row g-3 needs-validation mb-3"
                    noValidate
                    style={{
                        alignItems:'center'
                    }}
                    onSubmit={(event: React.FormEvent<HTMLFormElement>)=>{
                        event.preventDefault();

                        refForm.current.classList.add('was-validated')

                        handleSubmit(submitForm)(event)
                    }}
                    ref={refForm}
                    >
                        <div
                            className="coll-md-12">
                            <label htmlFor="nome"
                            className="form-label">
                               Nome 
                            </label>
                            <input type="text" 
                            className="form-control"
                            placeholder="Dephay"
                            id="nome"
                            required
                            {...register('nome',
                                {required: 'Nome é obrigatório'}
                            )}/>
                            <div className="invalid-feedback">
                                {errors.nome && errors.nome.message}
                            </div>
                        </div>
                        <div
                            className="coll-md-12">
                            <label htmlFor="email"
                            className="form-label">
                               Email 
                            </label>
                            <input type="email" 
                            className="form-control"
                            placeholder="email@exemplo.com"
                            id="email"
                            required
                            {...register('email',
                                {required: 'Email é obrigatório'}
                            )}/>
                            <div className="invalid-feedback">
                                {errors.email && errors.email.message}
                            </div>
                        </div>
                    <div className="col-md-12">
                        <button
                            type="submit"
                            className="btn btn-success"
                        >Salvar</button>
                    </div>
                </form>
           </LayoutDashboard>
        </>
    )
}
