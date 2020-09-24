import React from 'react';
import PageHeader from '../../components/PageHeader/index';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
//import { Route } from 'react-router-dom';

import '../TeacherList/styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container"> 
            <PageHeader title="Estes são os Proffys disponíveis">
                <form id="search-teachers">
                   <Input name="subject" label="Matéria" />
                   <Input name="week_day" label="Dias da semana"/>
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