import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader/index';
import WarningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import './styles.css';




function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que você quer da aulas."
                description="O primeiro passo é preencher o fomulário de inscrição">

            </PageHeader>
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>
                
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        options={[
                            { id: 1, label: 'Artes' },
                            { id: 2, label: 'Biologia' },
                            { id: 3, label: 'Quimica' },
                            { id: 4, label: 'Matemática' },
                            { id: 5, label: 'Física' },
                        ]}
                        name="subjec"
                        label="Matéria" />
                    <Input name="cost" label="Custa da sua aula por hora" />
                </fieldset>
                
                <fieldset>
                    <legend>Horários disponíveis
                        <button type="button">
                            + Novo botão
                        </button>
                    </legend>
                    <div className="schedule-item">
                        <Select
                            options={[
                                { id: 1, label: 'Artes' },
                                { id: 2, label: 'Biologia' },
                                { id: 3, label: 'Quimica' },
                                { id: 4, label: 'Matemática' },
                                { id: 5, label: 'Física' },
                            ]}
                            name="subjec"
                            label="Matéria" />
                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="até" type="time" />
                    </div>
                </fieldset>
                
                <footer>
                    <p>
                        <img src={WarningIcon} alt="Aviso importante" />
                        importante! <br />
                        preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;