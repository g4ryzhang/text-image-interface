import { useState } from 'react';
import './TopNav.css';

const TopNav = props => {
    const [query, setQuery] = useState('');

    const searchCommunity = e => e.preventDefault();

    return (
        <div className='navContainer'>
            <div className='navMenu'>
                {props.navItems.map((item, k) => (
                    <button className='navItem' key={k}>
                        {item}
                    </button>
                ))}
            </div>
                <form className='comSearchForm' onSubmit={searchCommunity}>
                    <div className='comInputContainer'>
                        <input
                            type='text'
                            name='query'
                            className='comInput'
                            placeholder={`Community Search`}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <i style={{fontSize: '1.2rem', margin: 'auto 0'}} class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </form>
        </div>
    );
}

export default TopNav;