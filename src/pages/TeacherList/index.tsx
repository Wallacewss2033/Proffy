import React from 'react';
import PageHeader from '../../components/PageHeader/index';
import whatsapp from '../../assets/images/icons/whatsapp.svg';
import '../TeacherList/styles.css';
//import { Route } from 'react-router-dom';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time " />
                    </div>
                </form>
            </PageHeader>
            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://scontent.fssa2-2.fna.fbcdn.net/v/t31.0-8/20933769_1413983082052163_5640163231637311451_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=kuVp0Zl_eL4AX9blY_S&_nc_ht=scontent.fssa2-2.fna&oh=0c37c0ddee060ec6ba37d71470185ec8&oe=5F5EEFE1"
                            alt="Wallace Souza" />
                        <div>
                            <strong>Wallace Souza</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                    Olá, tudo bem?! Sou o professor Wallace.
                        <br/><br/>
                        Sou graduado, pos-graduado, mestrado em Desenvolvimento de sofware.
                        E você vai curtir muito na nossas aulas de programação.
                    </p>
                    <footer>
                        <p>
                            preço/hora
                            <strong>R$80,00</strong>
                            <br/>
                            <button type="button">
                                <img src={whatsapp} alt="whatsapp"/>
                                Entrar em contato
                            </button>
                        </p>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;