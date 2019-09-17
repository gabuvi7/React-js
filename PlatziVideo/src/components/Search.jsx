import React from 'react';
import '../assets/styles/components/search.scss';

const mainTitleText = 'Qué quieres ver hoy?';
const mainInputText = 'Buscar...';

const Search = () => (
    <section className="main">
        <h2 className="main__title">{mainTitleText}</h2>
        <input type="text" className="input" placeholder={mainInputText}/>
    </section>
);

export default Search;
