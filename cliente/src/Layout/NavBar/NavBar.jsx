import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<nav className='NavBar-Wrapper'>
			<div>
				<h3 className='NavBar-Title'>Estudiantes - CRUD</h3>
			</div>
			<div className='NavBar-Links'>
				<Link to='/' className='NavBar-Link'>
					Inicio
				</Link>
				<Link to='/add' className='NavBar-Link'>
					Añadir
				</Link>
			</div>
		</nav>
	)
}

export default Home
