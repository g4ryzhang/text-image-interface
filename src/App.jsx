import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav'
import SearchPhotos from './searchPhoto';
// import Sidebar from './Sidebar'
import {Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <TopNav></TopNav>
            <div className='App'>
                <div className='sidebarWrapper'>
                    <Sidebar>
                        <Menu icon={<i class="fa-solid fa-user"></i>}>
                            <SubMenu label='Charts' icon={<i class="fa-solid fa-user"></i>}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                            </SubMenu>
                            <MenuItem> Documentation </MenuItem>
                            <MenuItem> Calendar </MenuItem>
                        </Menu>
                    </Sidebar>
                </div>
                <div className='mainContent'>
                    <SearchPhotos />
                    {/* <div>
                        <a href='https://vitejs.dev' target='_blank'>
                            <img src='/vite.svg' className='logo' alt='Vite logo' />
                        </a>
                        <a href='https://reactjs.org' target='_blank'>
                            <img src={reactLogo} className='logo react' alt='React logo' />
                        </a>
                    </div>
                    <h1>Vite + React</h1>
                    <div className='card'>
                        <button onClick={() => setCount((count) => count + 1)}>
                            count is {count}
                        </button>
                        <p>
                            Edit <code>src/App.jsx</code> and save to test HMR
                        </p>
                    </div>
                    <p className='read-the-docs'>
                        Click on the Vite and React logos to learn more
                    </p> */}
                </div>
            </div>
        </>
    )
}

export default App
