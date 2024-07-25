import React from 'react'
import { Navbar, Footer, CardBlue } from '../../../components'
import Mockup from '../../../assets/images/mockup-notebook.png'
import './styles.css'
import gifnote from '../../../assets/images/gifnote.gif';

// icons 
import { PiJoystick } from "react-icons/pi";
import { MdOutlineSavings } from "react-icons/md";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaRunning } from "react-icons/fa";

export default function FutManager() {
    return (
        <div>
            <Navbar />

            <div className='container-main-project'>
                <div className='header'>
                    <div className='header-child'>
                        <h1 className='header-title'>Futmanager</h1>
                        <p className='header-text'>O FutManager, desenvolvido por Luciano Marin e Nathan Reuter em 2016, é
                            um <span style={{ color: '#5960EE' }}>sistema web focado na gestão de equipes de futebol</span>,
                            com ênfase especial no gerenciamento financeiro. Utilizado por 140 escolas e aproximadamente 20
                            mil alunos. É um software pago, custando cerca de R$200.</p>
                    </div>
                    <div className='header-child header-image'>
                        <img src={Mockup} className='mockup-img' />
                        <div className='gradient-retangle'></div>
                    </div>
                </div>
                <div className="functionalities">
                    <h2 className="title-funcionalities">Principais funcionalidades</h2>
                    <div className="functionalities-container">
                        <div className="card-red-container">
                            <div className="card-content">
                                <div className="icon-container"><PiJoystick /></div>
                                <h1 className="funtion-title">Controle de presenças</h1>
                                <p className="function-description">Mantenha o controle preciso da presença dos membros do clube em treinos e eventos através de um sistema intuitivo e fácil de usar. Registre e acompanhe quem está presente em cada sessão, permitindo uma gestão eficiente da participação dos atletas.</p>
                            </div>
                        </div>
                        <div className="card-blue-container">
                            <div className="card-content">
                                <div className="icon-container"><PiJoystick /></div>
                                <h1 className="funtion-title">Controle de presenças</h1>
                                <p className="function-description">Mantenha o controle preciso da presença dos membros do clube em treinos e eventos através de um sistema intuitivo e fácil de usar. Registre e acompanhe quem está presente em cada sessão, permitindo uma gestão eficiente da participação dos atletas.</p>
                            </div>
                        </div>
                        <div className="card-blue-container">
                            <div className="card-content">
                                <div className="icon-container"><PiJoystick /></div>
                                <h1 className="funtion-title">Controle de presenças</h1>
                                <p className="function-description">Mantenha o controle preciso da presença dos membros do clube em treinos e eventos através de um sistema intuitivo e fácil de usar. Registre e acompanhe quem está presente em cada sessão, permitindo uma gestão eficiente da participação dos atletas.</p>
                            </div>
                        </div>
                        {/* <div className="card-blue-container">
                            <div className="card-content">
                                <div className="icon-container"><PiJoystick /></div>
                                <h1 className="funtion-title">Controle de presenças</h1>
                                <p className="function-description">Mantenha o controle preciso da presença dos membros do clube em treinos e eventos através de um sistema intuitivo e fácil de usar. Registre e acompanhe quem está presente em cada sessão, permitindo uma gestão eficiente da participação dos atletas.</p>
                            </div>
                        </div> */}

                        <CardBlue
                            icon={<FaRunning />}
                            title='Gerenciamento de Atletas'
                            description='Organize informações detalhadas de todos os atletas do clube, incluindo histórico de participações, desempenho em jogos, estatísticas e dados pessoais. Facilite a administração de contratos, renovações e transferências, proporcionando uma visão completa e atualizada do elenco.'
                        />
                    </div>
                </div>
                <div className='experiences-container2'>
                    <h1 className='experience-title2'>Experiência para os clientes</h1>
                    <p className='experience-subtitle2'>Veja como os clientes se sentiram tendo a 
                        experiência de terem</p>
                    <p className='experience-subtitle2'>seu software facilitando o dia a dia deles.</p>
                </div>
                {/*img {gifnote}*/}
                <div className='header2'>
                    <div className='header-child2'>
                        <h1 className='header-title2'>Futpaz</h1>
                        <p className='header-text2'>O Projeto Social FutPaz [Futpaz 2022], fica situado em um bairro carente da cidade de Piracicaba-SP, e é uma  entre as idades de 7 a 14 anos (sub 9, sub 11, sub 13 e sub 15).
                           escola especializada no ensino da prática de futebol para crianças,
                            Atualmente, esta escola atende em torno de 80 crianças e pré-adolescentes que buscam um aperfeiçoamento dentro do esporte, ofertando aulas e treinamentos, além de oferecer outros benefícios ao aluno, por mérito do jogador, e a sua família, por meio de sorteios.</p>
                    </div>
            </div>
            <Footer />
        </div>
    </div>
)}
