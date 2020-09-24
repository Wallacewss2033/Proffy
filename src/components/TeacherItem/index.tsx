import React from 'react';
import whatsapp from '../../assets/images/icons/whatsapp.svg';

import '../TeacherItem/styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/39920409?s=460&u=e0379153f42021f1edf2d8bd312507228ff077b8&v=4"
                    alt="Wallace Souza" />
                <div>
                    <strong>Wallace Souza</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Olá, tudo bem?! Sou o professor Wallace.
                        <br /><br />
                        Sou graduado, pos-graduado, mestrado em Desenvolvimento de sofware.
                        E você vai curtir muito na nossas aulas de programação.
                    </p>
            <footer>
                <p>
                    preço/hora
                            <br />
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsapp} alt="whatsapp" />
                                Entrar em contato
                        </button>

            </footer>
        </article>
    );
}

export default TeacherItem;
