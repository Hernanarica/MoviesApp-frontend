import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Login } from '../views/Login/Login';
import { Register } from '../views/Register/Register';

export function AppRouter() {
	useEffect(() => {
		console.log(Cookies.get('token'));
	}, []);
	
	const handleLogout = () => {
		axios.post('http://localhost:8000/api/logout', {
			token: Cookies.get('token')
		})
			.then(r => {
				console.log(r);
				Cookies.remove('token');
			});
	};
	
	return (
		<BrowserRouter>
			<header>
				<nav>
					<li>
						<Link to="/">Login</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
					<li>
						<button onClick={ handleLogout }>Logout</button>
					</li>
				</nav>
			</header>
			
			<Routes>
				<Route path="/" element={ <Login /> } />
				<Route path="/register" element={ <Register /> } />
			</Routes>
		</BrowserRouter>
	);
}