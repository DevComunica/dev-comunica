import React from 'react'
import { Navbar, Footer } from '../../../components'
import './styles.css'

export default function FutManager() {
    return (
        <div>
            <Navbar />
            <h1>Hii, você está na FUTMANAGER</h1>
        <main className="Content">
        <div className="Section" style={{ backgroundColor: 'lightblue' }}>Seção 1
        <p>futmanager e fotinho note</p></div>

        <div className="Section" style={{ backgroundColor: 'lightgreen' }}>Seção 2
        <p>funcionalidades</p></div>

        <div className="Section" style={{ backgroundColor: 'lightcoral' }}>Seção 3
        <p>experiencia clientes</p></div>

        <div className="Section" style={{ backgroundColor: 'lightgoldenrodyellow' }}>Seção 4
        <p>futpaz e fotinho</p></div>
        </main>
            <Footer />
        </div>
    )
}
