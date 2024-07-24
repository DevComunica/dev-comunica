import React from 'react'
import { Navbar, Footer, CardBlue } from '../../../components'
import Mockup from '../../../assets/images/mockup-notebook.png'
import './styles.css'

// icons 
import { PiJoystick } from "react-icons/pi";
import { MdOutlineSavings } from "react-icons/md";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaRunning } from "react-icons/fa";

export default function FutManager() {
    return (
        <div>
            <Navbar />
            {/* <main className="Content">
                <div className="Section" style={{ backgroundColor: 'lightblue' }}>Seção 1
                    <p>futmanager e fotinho note</p></div>

                <div className="Section" style={{ backgroundColor: 'lightgreen' }}>Seção 2
                    <p>funcionalidades</p></div>

                <div className="Section" style={{ backgroundColor: 'lightcoral' }}>Seção 3
                    <p>experiencia clientes</p></div>

                <div className="Section" style={{ backgroundColor: 'lightgoldenrodyellow' }}>Seção 4
                    <p>futpaz e fotinho</p></div>
            </main> */}

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
            </div>
            <Footer />
        </div>
    )
}
