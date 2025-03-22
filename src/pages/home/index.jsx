import React from 'react';
import Header from '../../components/header/Header';
import './home.css';
import Typewriter from 'typewriter-effect/dist/core';
import fakeVideo from '../../assets/imgs/fakeVideo.png';

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
                    <h1 className="text-7xl font-bold mb-4" id="typewriter"></h1>
                    <p className="text-lg text-gray-600">
                        Desenvolvemos softwares para empresas que querem <br /> crescer para um próximo nível.
                    </p>
                    <div className="flex justify-center" style={{ marginTop: '50px' }}>
                        <button className='letsTalkBtn bg-black text-white px-4 py-2 flex items-center'>
                            Vamos conversar 
                            <span className="ml-2">→</span>
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
        </>
    );
};

export default Home;