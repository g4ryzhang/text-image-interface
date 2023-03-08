import { useEffect, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav'
import TopSection from './TopSection';
import Card from './Card';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import GenerateBar from './GenerateBar';
// images
import reactLogo from './assets/react.svg';
import redBg from './assets/red.jpg';
import purpleBg from './assets/purple.jpg';
import exp from './assets/exp.webp';
import teddy from './assets/teddy.png';
import pets from './assets/pets.webp';
import sunrise from './assets/sunrise.webp';
import cat from './assets/cat.webp';
import comic from './assets/comic.webp';
import computer from './assets/computer.webp';
import shiba from './assets/shiba.webp';

const imgs = [ cat,  computer, shiba, exp, teddy, pets, sunrise, reactLogo, redBg, comic, purpleBg,];

const topNavItems = ['Home', 'Gallery', 'Community', 'Learn more'];
const brand = ['Image Gen'];

function App() {
    const [ showStickyBar, setShowStickyBar ] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            if (true) {
                if (window.scrollY >= 158) {
                    setShowStickyBar(true);
                } else {
                    setShowStickyBar(false);
                }
            }
        })
    }, [])

    return (
        <>
            <TopNav navItems={topNavItems} brand={brand} />
            <div className='App'>
                <div className='sidebarWrapper'>
                    <div>
                        <Sidebar defaultCollapsed>
                            <Menu icon={<i class="fa-solid fa-user"></i>}>
                                <SubMenu label='Recent' icon={<i class="fa-solid fa-clock-rotate-left"></i>}>
                                    <MenuItem> dog </MenuItem>
                                    <MenuItem> cat </MenuItem>
                                    <MenuItem> more history... </MenuItem>
                                </SubMenu>
                                <MenuItem icon={<i class="fa-solid fa-book"></i>}> Documentation </MenuItem>
                                <MenuItem icon={<i class="fa-regular fa-circle-question"></i>}> FAQ </MenuItem>
                            </Menu>
                        </Sidebar>
                    </div>
                    
                </div>
                <div className='mainContent'>
                    <TopSection showBar={!showStickyBar}/>
                    <Card pics={imgs}/>
                    {showStickyBar && <div className='bottomSection'>
                        <GenerateBar placeholder={`Click on an image to generate with prompts!`} showBar={true}/>
                    </div>}
                </div>
            </div>
        </>
    );
};

export default App;
