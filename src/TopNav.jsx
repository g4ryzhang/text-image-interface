import { useEffect, useState } from 'react';
import './TopNav.css';
import Dropdown from './Dropdown';

const TopNav = props => {
    const [query, setQuery] = useState('');
    const [ showDropdown, setShowDropdown ] = useState(window.innerWidth <= 768);

    const searchCommunity = e => e.preventDefault();

    useEffect(() => {
        addEventListener("resize", (e) => {
            if (window.innerWidth > 768) {
                setShowDropdown(false);
            } else {
                setShowDropdown(true);
            }
        });
    }, [])

    return (
        <div className='navContainer'>
            {showDropdown
                ? <Dropdown menuItems={props.navItems}/>
                : <div className='navMenu'>
                    {props.navItems.map((item, k) => (
                        <button className='navItem' key={k}>
                            {item}
                        </button>
                    ))}
                </div>
            }
            
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
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </form>
        </div>
    );
}

export default TopNav;
