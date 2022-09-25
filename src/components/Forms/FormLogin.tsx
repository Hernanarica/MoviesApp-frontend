import React, { FormEvent, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export function FormLogin() {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		axios.post('http://localhost:8000/api/login', {
			email: 'hernan@gmail.com',
			password: 'asdf1234',
		}).then(r => {
			console.log(r);
			Cookies.set('token', r.data.authorisation.token, {
				expires: 7
			});
			
		}).catch(err => {
			console.log(err.message);
		})
	};
	
	return (
		<>
			<form action="#" method="post" onSubmit={ handleSubmit }>
				
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						placeholder="Email"
						name="email"
						id="email"
					/>
				</div>
				
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						placeholder="password"
						name="password"
						id="password"
					/>
				</div>
				<button>Login</button>
			</form>
		</>
	);
}