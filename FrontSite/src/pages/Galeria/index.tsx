import { LayoutDashboard } from "../../components/LayoutDashboard"


export default function Galeria() {

    const images = [
        "public/imagens/galeriaEventos/DSC_0431 (1).jpg",
        "public/imagens/galeriaEventos/DSC_0433.jpg",
        "public/imagens/galeriaEventos/DSC_0559.jpg",
        "public/imagens/galeriaEventos/DSC_0650.jpg"
    ];

    const imagesAniversario = [
        "public/imagens/niver_junho/Imagem-do-WhatsApp-de-2024-08-06-às-08.18.36_5c20041b-1.jpg",
        "public/imagens/niver_junho/Imagem-do-WhatsApp-de-2024-08-06-às-08.18.36_4668644d-1.jpg",
        "public/imagens/niver_junho/Imagem-do-WhatsApp-de-2024-08-06-às-08.18.36_c6336698.jpg",
        "public/imagens/niver_junho/Imagem-do-WhatsApp-de-2024-08-06-às-08.18.37_8995dc89.jpg"
    ]

    return(
        <>
            <LayoutDashboard>
                <div className="container page-content my-5">
                    <h1 className="fw-bold text-success text-center">Galeria</h1>
                    <p className="text-center mt-3">
                        Veja algumas fotos dos eventos e atividades realizados pela Casa da Paz.
                    </p>

                    <center>
                        <h1>Aniversáriantes de Junho</h1>
                    </center>
                    
                    <div className="row g-3 mt-4">
                        {imagesAniversario.map((src, index) => (
                            <div className="col-12 col-sm-6 col-md-3" key={index}>
                                <div className="card border-0">
                                    <img
                                        src={src}
                                        alt={`Imagem ${index + 1}`}
                                        className="img-fluid rounded shadow-sm"
                                        style={{ maxHeight: "300px", objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
<br />
                    <center>
                    <h1>Aulas e Eventos</h1>
                    </center>
                    <div className="row g-3 mt-4">
                        {images.map((src, index) => (
                            <div className="col-12 col-sm-6 col-md-4" key={index}>
                                <div className="card border-0">
                                    <img
                                        src={src}
                                        alt={`Imagem ${index + 1}`}
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