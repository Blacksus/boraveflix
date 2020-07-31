import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    
    const [categorias, setCategorias] = useState([]);
    const valoresIniciais = {
        nome: 'Filmes',
        descricao: 'Descrição de filmes',
        cor: '#fefefe'
    };
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor
        })
    }
    function handleChange(evento){
        setValue(evento.target.getAttribute('name'), evento.target.value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de categoria</h1>
            <form onSubmit={function handleSubmit(e){
                e.preventDefault();
                console.log('eit');
                setCategorias([
                    ...categorias,
                    valoresIniciais
                ])
            }}>
                <div>
                    <label>
                        Nome
                        <input type="text" value={values.nome} name="nome"
                            onChange={handleChange}></input>
                    </label>
                    <label>
                        Descrição
                        <input type="text" value={values.descricao} name='descricao'
                            onChange={handleChange}></input>
                    </label>
                    <label>
                        Cor
                        <input type="color" value={values.cor} name='cor'
                            onChange={handleChange}></input>
                    </label>
                </div>
                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categ, index) => {
                    return (
                        <li key={index}>{categ}</li>
                    )
                })}
            </ul>
        </PageDefault>
    )
}

export default CadastroCategoria;