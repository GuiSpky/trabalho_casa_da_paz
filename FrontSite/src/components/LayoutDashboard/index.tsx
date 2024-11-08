import { ReactNode} from "react"
import { Link} from "react-router-dom"

interface IProps{
    children: ReactNode
}

export const LayoutDashboard = (props: IProps) => {

    return(
        <>
            <header
                className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0"
            >
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
                    href="#">
                    Casa da Paz
                </a>
                <button
                    className="navbar-toggler position-absolute d-md-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="w-100"></div>
                <div className="navbar-nav">
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav
                        id="sidebarMenu"
                        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
                    >
                        <div className="position-sticky pt-3 h-100">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link`}
                                        to={'/'}
                                    >
                                        Inicio
                                    </Link>
                                    <Link
                                        className={`nav-link`}
                                        to={'/sobrenos'}
                                    >
                                        Sobre nós
                                    </Link>
                                    {/* <Link
                                        className={`nav-link`}
                                        to={'/usuarios'}
                                    >
                                        Usuarios
                                    </Link> */}
                                    <Link
                                        className={`nav-link`}
                                        to={'/voluntario'}
                                    >
                                        Voluntarios
                                    </Link>
                                    <Link
                                        className={`nav-link`}
                                        to={'/doador'}
                                    >
                                        Doações
                                    </Link>
                                    <Link
                                        className={`nav-link`}
                                        to={'/galeria'}
                                    >
                                        Galeria
                                        </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>


                    <main
                        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                    >
                        {props.children}

                    </main>

                </div>
            </div>
            <div style={{
                position: 'fixed',
                bottom: '0',
                left: '0',
                width: '100%',
                backgroundColor: '#333',
                color: 'white',
                textAlign: 'center',
                padding: '10px',
                fontSize: '16px'
            }}>
            <center>
            <a href="https://www.instagram.com/casadapaz_umuarama/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"></img></a>
            {/* <a href = "mailto:guii0410@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></img></a> */}
            {/* <a href="https://www.linkedin.com/in/guilhermefernandesdesouza/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img></a>    */}
            </center>
            </div>
        </>
    )
}