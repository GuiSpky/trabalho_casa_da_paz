import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from './style.module.css'; // Importando os estilos

interface IProps {
  children: ReactNode;
}

export const LayoutDashboard = (props: IProps) => {
  return (
    <>
      {/* Barra de navegação superior */}
      <header className={`${styles.header} navbar navbar-dark sticky-top flex-md-nowrap p-0`}>
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Casa da Paz
        </a>

        {/* Espaço para os botões de navegação */}
        <div className={styles.navLinksContainer}>
          <Link className={styles.navLink} to="/">
            Início
          </Link>
          <Link className={styles.navLink} to="/sobrenos">
            Sobre nós
          </Link>
          <Link className={styles.navLink} to="/equipe">
            Equipe
          </Link>
          <Link className={styles.navLink} to="/voluntario">
            Voluntários
          </Link>
          <Link className={styles.navLink} to="/doador">
            Doações
          </Link>
          <Link className={styles.navLink} to="/galeria">
            Galeria
          </Link>
        </div>
      </header>

      {/* Container principal */}
      <div className="container-fluid">
          {/* Menu lateral (Sidebar) */}
          {/* O menu lateral foi ocultado */}

          {/* Conteúdo principal */}
          <main className={`col-md-9 ms-sm-auto col-lg-10 px-md-4 ${styles.mainContent}`}>
            <div className={styles.mainContainer}>
              {props.children}
            </div>
          </main>
      </div>

      {/* Rodapé fixo */}
      <div className={styles.footer}>
        <center>
          <a
            href="https://www.instagram.com/casadapaz_umuarama/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"
              alt="Instagram"
            />
          </a>
        </center>
      </div>
    </>
  );
};
