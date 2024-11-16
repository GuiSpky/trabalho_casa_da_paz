import axios from "axios";
import { LayoutDashboard } from "../../components/LayoutDashboard"
import { useEffect, useState } from "react";

interface Dados {
    foto: string;
    nome: string;
  }

export default function equipe(){
    const [fotos, setFotos] = useState<Dados[]>([]);

    useEffect(() => {
      // Fazendo requisição ao backend
      axios.get('http://localhost:3001/api/equipe')
        .then(response => {
          setFotos(response.data);
          // console.log(response.data)
        })
        .catch(error => {
          console.error('Erro ao buscar usuários:', error);
        });
    }, []);

    return(
        <>
            <LayoutDashboard>
                <div className="container page-content my-5">
                    <h1 className="fw-bold text-success text-center">Nossa Equipe</h1>
                    <p className="text-center mt-3">
                        Todos os que fazem parte da nossa história e fazem parte da diferença!
                    </p>
                    
                    <div className="row g-3 mt-4">
                        {fotos.map((dados, index) => (
                            <div className="col-12 col-sm-6 col-md-3" key={index}>
                                <div className="card border-0">
                                    <img
                                        src={'http://127.0.0.1:8000/storage/'+dados.foto}
                                        alt={dados.foto}
                                        className="img-fluid rounded shadow-sm"
                                        style={{ maxHeight: "300px", objectFit: "cover" }}
                                    />
                                    <br />
                                    <p>{dados.nome}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </LayoutDashboard>
        </>
    )
}