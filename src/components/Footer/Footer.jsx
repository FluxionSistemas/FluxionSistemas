import React from "react";
import "./footer.css";
import logotipo from '../../assets/imgs/header/logotipoFluxion.png';
import youTube from '../../assets/imgs/footer/icons/mdi_youtube.svg';
import linkedin from '../../assets/imgs/footer/icons/mdi_linkedin.svg';
import instagram from '../../assets/imgs/footer/icons/mdi_instagram.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="text-black p-4">
            <div className="footerBody">
                <img src={logotipo} alt="" />
                <div className="socialMedia flex gap-4">
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={youTube} alt="" />
                </div>
            </div>
            <nav className="nav_footer">
                <h2 className="mb-8 font-bold" style={{ letterSpacing: '8px' }}>SITEMAP</h2>
                <ul>
                    <li><a href="#Soluções">Soluções</a></li>
                    <li><a href="#Cases">Cases</a></li>
                    <li><a href="#Insigths">Insigths</a></li>
                    <li><a href="#Cultura">Cultura</a></li>
                    <li><a href="#Cultura">Contato</a></li>
                </ul>
            </nav>
            <div className="flex justify-center">
                <hr className="ftHr mt-10 mb-10" />
            </div>
            <div className="fnFooter mb-10">
                <p>Fluxion Tecnologia</p>
                <h3 className="text-1xl font-bold">
                    <a href="#">
                        Voltar para o topo
                        <span className="ml-2">
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                    </a>
                </h3>
            </div>
        </footer>
    );
    
}