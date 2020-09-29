import React from 'react';
import PageHeader from '../../components/PageHeader/index';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';
import Input from '../../components/Input';
//import { Route } from 'react-router-dom';

import '../TeacherList/styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container"> 
            <PageHeader title="Estes são os Proffys disponíveis">
                <form id="search-teachers">
                <Select 
                    options={[ 
                        {id: 1, label: 'Artes'},
                        {id: 2, label: 'Biologia'},
                        {id: 3, label: 'Quimica'},
                        {id: 4, label: 'Matemática'},
                        {id: 5, label: 'Física'},
                    ]} 
                    name="subjec" 
                    label="Matéria"/>
                  <Select 
                    options={[ 
                        {id: 1, label: 'Segunda-feira'},
                        {id: 2, label: 'Terça-feira'},
                        {id: 3, label: 'Quarta-feira'},
                        {id: 4, label: 'Quinta-feira'},
                        {id: 5, label: 'Sexta-feira'},
                    ]} 
                    name="week_day" 
                    label="Dias da semana"/>
                   <Input name="time" type="time" label="Horas"/>
                </form>
            </PageHeader>
            <main>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;