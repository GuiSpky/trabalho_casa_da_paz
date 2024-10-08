import { useCallback, useEffect, useRef, useState } from "react"
import { IToken } from "../../../interfaces/token"
import { verificaTokenExpirado } from "../../../services/token"
import { useNavigate, useParams } from "react-router-dom";
import { LayoutDashboard } from "../../../components/LayoutDashboard";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface IForm {
    nome: string
    email: string
    password: string
    permissoes: string
}

export default function GerenciarUsuarios(){ 

    const{
        register,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm<IForm>()

    const refForm = useRef<any>()

    const navigate = useNavigate()

    const { id } = useParams();

    const [isEdit, setIsEdit] = useState(false);
    
    useEffect(() => {
        let lsToken = localStorage.getItem('meusite.token')

        let token: IToken | null = null

        if (typeof lsToken === 'string') {
            token = JSON.parse(lsToken)
        }

        if (!token || verificaTokenExpirado(token.accessToken)){
            navigate('/')
        }

        const idUser = Number(id)
        if(!isNaN(idUser)){
            setIsEdit(true)

            axios.get(import.meta.env.VITE_URL+'/users?id'+idUser)
                .then((res) =>{
                    setValue("nome", res.data[0].nome)
                    setValue("email", res.data[0].email)
                    setValue("permissoes", res.data[0].permissoes)
                })
        }

    }, [id])

    const submitForm: SubmitHandler<IForm> = useCallback((data) => {
        axios.post(import.meta.env.VITE_URL+'/users',
            data
        )
        .then((res)=>{
            navigate('/usuarios')
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return(
        <>
            <LayoutDashboard>
                <h1>{isEdit ? 'Adicionar Usuario' : 'Editar Usuario'}</h1>

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
                        <div
                            className="coll-md-12">
                            <label htmlFor="passowrd"
                            className="form-label">
                               Senha 
                            </label>
                            <input type="password" 
                            className="form-control"
                            placeholder="Digite sua senha"
                            id="passowrd"
                            required
                            {...register('password',
                                {required: 'Senha é obrigatório'}
                            )}/>
                            <div className="invalid-feedback">
                                {errors.password && errors.password.message}
                            </div>
                        </div>
                        <div
                            className="coll-md-12">
                            <label htmlFor="permissoes"
                            className="form-label">
                               Permissoes: 
                            </label>
                            <select
                            className="Form-select"
                            id="permissoes"
                            defaultValue={""}
                            required
                            {...register('permissoes',
                                {required: 'Permissoes é obrigatório'}
                            )}
                            >
                                <option value={""}>Selecione o Tipo</option>
                                <option value={"admin"}>Admin</option>
                                <option value={"colaborador"}>Colaborador</option>
                            </select>
                            <div className="invalid-feedback">
                                {errors.permissoes && errors.permissoes.message}
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