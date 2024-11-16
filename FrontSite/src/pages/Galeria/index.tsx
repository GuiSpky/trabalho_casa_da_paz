import axios from "axios";
import { LayoutDashboard } from "../../components/LayoutDashboard"
import { useEffect, useState } from "react";

interface Dados {
    foto: string;
  }

export default function Galeria() {

    const [fotos, setFotos] = useState<Dados[]>([]);

  useEffect(() => {
    // Fazendo requisição ao backend
    axios.get('http://localhost:3001/api/fotos')
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
                    <h1 className="fw-bold text-success text-center">Galeria</h1>
                    <p className="text-center mt-3">
                        Veja algumas fotos dos eventos e atividades realizados pela Casa da Paz.
                    </p>

                    <center>
                        <h1>Aulas e Eventos</h1>
                    </center>
                    
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </LayoutDashboard>
        </>
    )
}