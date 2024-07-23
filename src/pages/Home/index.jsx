import React, { useState } from 'react'
import { Navbar, Footer, AutomaticSlider } from '../../components'
import Ilustration1 from '../../assets/images/ilustration-1.png'
import Ilustration2 from '../../assets/images/ilustration-2.png'
import './styles.css'

export default function Home() {
    // configs da sidebar
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleSubMenu = (item) => {
        setExpandedItem(prevItem => (prevItem === item ? null : item));
    };

    return (
        <div>
            <Navbar />
            <div className='container-main-home'>
                {/* <img src={Ilustration1} className='ilustration-1' /> */}
                <div className='header'>
                    <div className='header-child'>
                        <h1 className='main-title'>Você sabe <br /><span style={{ color: '#5960EE' }}>o que é PSI</span>?</h1>
                        <h2 className='main-subtitle'><span style={{ color: '#F24150' }}>venha conhecer</span> um pouco</h2>
                    </div>
                    <div className='header-child'>
                        <p>PSI, Práticas em Sociedade e Informática, é uma <span style={{ color: '#F24150' }}>disciplina do curso de
                            Análise e Desenvolvimento de Sistemas</span> que integra conhecimento científico
                            às necessidades comunitárias. Ela aborda a cultura extensionista, aspectos
                            legais, documentação do IFSP, metodologias de pesquisa e desenvolvimento
                            de projetos de extensão, com <span style={{ color: '#F24150' }}>o estudante como protagonista.</span></p>
                    </div>
                </div>
                {/* <img src={Ilustration2} className='ilustration-2' /> */}
                <div className='about'>
                    <div className='about-child'>
                        <h3 className='subtitle'>Mas qual a definição de “extensionista” neste contexto?</h3>
                        <p style={{ textAlign: 'justify', fontSize: '14px', lineHeight: '28px' }}>“Atividades extensionistas, em sua essência, consistem em criar atividades práticas
                            que estejam relacionadas às disciplinas cursadas. Para assim, conectar alunos e a
                            sociedade. As atividades extensionistas são obrigatórias e distribuídas ao longo
                            do curso, devendo corresponder a 10% da carga horária do curso.”</p>
                    </div>
                    <div className='about-child tags-container'>
                        <div className='tags-1'>
                            <p className='tag'>compartilhamento de experiências de extensão</p>
                            <p className='tag'>formação integral</p>
                        </div>
                        <div className='tags-2'>
                            <p className='tag'>conhecimentos do curso</p>
                            <p className='tag'>interação com a comunidade local</p>
                        </div>
                        <div className='tags-3'>
                            <p className='tag'>protagonismo estudantil</p>
                            <p className='tag'>projetos comunitários</p>
                        </div>
                    </div>
                </div>
                <div className='slider-section'>
                    <h3 className='slider-title'>Conheça alguns dos devs</h3>
                    <p className='slider-subtitle'>essas são as subequipes de desenvolvedores do projeto 1, realizado no 3° semestre de 2024</p>
                </div>
                <AutomaticSlider />
            </div>
            <Footer />
        </div>
    )
}

