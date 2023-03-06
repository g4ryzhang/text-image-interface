import React, { useState } from 'react';
import './GenerateBar.css'

export default function GenerateBar(props) {

    const [query, setQuery] = useState('');

    const genImage = (e) => (e.preventDefault());

    return (
        <form className='form' onSubmit={genImage}>
            <div className='inputContainer'>
                <i style={{fontSize: '1.5rem', margin: 'auto 0'}} class='fa-regular fa-lightbulb'></i>
                <input
                    type='text'
                    name='query'
                    className='input'
                    placeholder={props.placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <button type='submit' className='searchButton'>
                Generate
            </button>
        </form>
    );
}

