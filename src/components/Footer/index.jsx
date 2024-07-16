import React from 'react'
import './styles.css'

export default function Footer() {
    return (
        <footer className='footer-container'>
            <h1>Hii, eu sou o FOOTER</h1>
            <div className="footer-final-line">
                <p>© Todos os direitos reservados por Dev Comunica, IFSP Hortolândia</p>

                <div className="links">
                    <a href="">dev.comunicaifsp@gmail.com</a>
                    <a href="">dev.comunica</a>
                    <a href="">dev-comunica-web</a>
                </div>
            </div>
        </footer>
    )
}

