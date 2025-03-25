import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './home.css';
import Typewriter from 'typewriter-effect/dist/core';
import fakeVideo from '../../assets/imgs//home/fakeVideo.png';
import ImgCard1 from '../../assets/imgs/home/CardImg.png';
import laptop_icon from '../../assets/imgs/home/icons/note.svg';
import group_icon from '../../assets/imgs/home/icons/group.svg';
import design_icon from '../../assets/imgs/home/icons/design_nib.svg';
import face_id_icon from '../../assets/imgs/home/icons/face_id.svg';
import api_icon from '../../assets/imgs/home/icons/api.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    React.useEffect(() => {
        const typewriter = new Typewriter(document.getElementById('typewriter'), {
            loop: true,
            delay: 75,
        });

        typewriter
            .typeString(`Vamos moldar <br/> o futuro juntos!`)
            .pauseFor(5000)
            .deleteAll()
            .start();
    }, []);

    return (
        <>
            <Header />
            <section>
                <div className="text-center p-4" style={{ marginTop: '100px', marginBottom: '100px' }}>
                    <h1 className="text-7xl font-bold mb-4" id="typewriter" style={{minHeight: '144px'}}></h1>
                    <p className="text-lg text-gray-600">
                        Desenvolvemos softwares para empresas que querem <br /> crescer para um próximo nível.
                    </p>
                    <div className="flex justify-center" style={{ marginTop: '50px' }}>
                        <button className='letsTalkBtn bg-black text-white px-4 py-2 flex items-center'>
                            Vamos conversar 
                            <span className="ml-2"><FontAwesomeIcon icon={faArrowRight}/></span>
                        </button>
                    </div>
                </div>
                <div className="promotionalContainer">
                    <div className="circle-container">
                        <svg className="circle-template" width="200" height="200" viewBox="0 0 250 250">
                            <defs>
                                <path
                                    id="circle-path"
                                    d="M125,10
                                    a115,115 0 1,1 0,230
                                    a115,115 0 1,1 0,-230"
                                    fill="none"
                                    stroke="transparent"
                                />
                            </defs>
                            <circle cx="125" cy="125" r="125" fill="none" stroke="none" strokeWidth="0" />
                            <text textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="black" letterSpacing="23">
                                <textPath href="#circle-path" startOffset="0">
                                    Tecnologia * Fluxion * Tecnologia * Fluxion
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={fakeVideo} alt=""/>
                    </div>
                </div>
            </section>

            <section className="secondSection bg-gray-100 p-40">
                <article className="text-start p-4"> 
                    <h2 className='text-4x1 mb-4' style={{ letterSpacing: '5px' }}>
                        Propósito da Fluxion
                    </h2>
                    <h1 className='text-4xl font-bold mb-4'>
                        Não apenas desenvolvemos <br/>tecnologia. Criamos soluções que <br/>tornam nossos clientes únicos e <br/>competitivos. Elevamos empresa à um <br/>próximo nível.
                    </h1>
                    
                    <div className="costumersReviews text-center gap-10">
                        <h2 className='text-4x1 mb-4'>
                            CLIENTES QUE CONFIAM EM NOSSO PROPÓSITO
                        </h2>
                        <div className="flex justify-center gap-25">
                            <div className="costumerIcon">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-600">P</span>
                                </div>
                                <p className="mt-2 text-sm font-bold">Cliente</p>
                            </div>
                            <div className="costumerIcon">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-600">P</span>
                                </div>
                                <p className="mt-2 text-sm font-bold">Cliente</p>
                            </div>
                            <div className="costumerIcon">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-600">P</span>
                                </div>
                                <p className="mt-2 text-sm font-bold">Cliente</p>
                            </div>
                            <div className="costumerIcon">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-600">P</span>
                                </div>
                                <p className="mt-2 text-sm font-bold">Cliente</p>
                            </div>
                            <div className="costumerIcon">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-600">P</span>
                                </div>
                                <p className="mt-2 text-sm font-bold">Cliente</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="text-start p-4">
                    <div>
                        <h2 className='text-4x1 mb-4' style={{ letterSpacing: '5px' }}>
                            Cases
                        </h2>
                        <h1 className='text-4xl font-bold mb-4'>
                            Soluções sob medida <br/> que geram resultados.
                        </h1>
                    </div>
                    
                    <div className="marketingCards">
                        <div className="marketCard1">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Automação Cooper Card</h2>
                                <div className="sectionBtn flex gap-2">
                                    <button>Automação </button>
                                    <button>Software</button>
                                </div>
                                <p className="mb-4">
                                    Automação simples e eficiente para testar e validar produtos de agro.
                                </p>
                            </div>
                            <a className='moreInfo' href="#">
                                <h2>Saiba Mais</h2>
                                <button>
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </button>
                            </a>
                        </div>
                        <div className="marketCard card shadow-md rounded-lg p-6 m-4">
                            <img src={ImgCard1} alt="" />
                        </div>
                    </div>
                </article>
                
                <h4 className='text-4xl font-bold mb-4 text-center' style={{marginTop: '130px'}}>
                    Quer conhecer um pouco <br/> mais dos nossos cases?
                </h4>
                <div className="flex justify-center">
                    <button className='letsTalkBtnWB bg-black text-white px-4 py-2 flex items-center'>
                        Fale Conosco 
                        <span className="ml-2"><FontAwesomeIcon icon={faArrowRight}/></span>
                    </button>
                </div>
            </section>

            <section className='thirdSection'>
                <article className="flex thirdContent">
                    <div className="leftSide">
                        <h2 className='text-4x1' style={{ letterSpacing: '5px' }}>
                            Soluções
                        </h2>
                        <h1 className='text-5xl font-bold'>Como conduzimos <br/>a transformação.</h1>
                        <p className='text-lg'>
                            Potencializamos sua transformação digital com <br/> soluções inovadora, feitas sob medida para <br/> atender às necessidades do seu négocio.
                        </p>
                    </div>
                    <div className="rightSide">
                        <article>
                            <img src={laptop_icon} alt="" />
                            <div className="contentRight">
                                <h2 className='text-xl font-bold mb-1'>Desenvolvimento e sustentação</h2>
                                <p>
                                    Conte com nosso time para criar e sustentar <br/>sua automação.
                                </p>
                            </div>
                        </article>
                        <article>
                            <img src={group_icon} alt="" />
                            <div className="contentRight">
                                <h2 className='text-2xl font-bold mb-1'>Alocação & Squads gerenciados</h2>
                                <p>
                                    Alocação de profissionais de tecnologia <br/>gerenciados para dar vazão ao backlog de <br/>projeto.
                                </p>
                            </div>
                        </article>
                        <article>
                            <img src={face_id_icon} alt="" />
                            <div className="contentRight">
                                <h2 className='text-2xl font-bold mb-1'>Hunting para profissionais de TI</h2>
                                <p>
                                    Encontre os melhores profissionais de <br/>tecnologia para sua equipe com nossos <br/>tech recruiters
                                </p>
                            </div>
                        </article>
                        <article>
                            <img src={design_icon} alt="" />
                            <div className="contentRight">
                                <h2 className='text-2xl font-bold mb-1'>Design e planejamento Interfaces (UI & UX)</h2>
                                <p>
                                    Melhore a experiência do cliente com interfaces <br/>que chamam atenção e que trazem real valor.
                                </p>
                            </div>
                        </article>
                        <article>
                            <img src={api_icon} alt="" />
                            <div className="contentRight">
                                <h2 className='text-2xl font-bold mb-1'>Integração de sistemas (API)</h2>
                                <p>
                                    Integre diversos sistemas para trazer mais <br/>agilidade às operações da sua empresa.
                                </p>
                            </div>
                        </article>
                    </div>
                </article>
                
                <div className="carrousel">
                    <h2 className='text-2x1' style={{ letterSpacing: '5px' }}>
                        O QUE DIZEM SOBRE NÓS
                    </h2>
                    <h1 className='text-5xl font-bold mt-6' style={{ letterSpacing: '2px', lineHeight: '1.2', maxWidth: '90%' }}> 
                        “A parceria com a Fluxion ajudou a transformar nossa gestão de clientes, impulsionando a Cooper Card para o top 10 no setor de benefícios empresariais.”
                    </h1>
                    <p className='text-lg mt-6'>
                        <span className='font-bold'>Nome do Cliente</span> - Cargo do Cliente
                    </p>
                    <div className="carrouselBtns">
                        <button>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                    </div>
                </div>
            </section>

            <section className='fourthSection content-center'>
                <div className="text-center p-4 mb-10 mt-4">
                    <h1 className='text-5xl font-bold mb-10'>
                        Pronto para começar?
                    </h1>
                    <h3 className='text-3xl font-bold'>
                        Vamos trabalhar juntos!
                    </h3>
                </div>
                <div className='mb-6' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p>
                        Entre em contato conosco e converse com um de nossos especialistas.
                    </p>
                    <button className='letsTalkBtnWB bg-white text-black flex items-center font-bold'>
                        Vamos conversar
                        <span className="ml-2"><FontAwesomeIcon icon={faArrowRight}/></span>
                    </button>
                </div>
            </section>
            <Footer></Footer>
        </>
    );


};

export default Home;