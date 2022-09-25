export function FormRegister() {
	return (
		<>
			<form action="#" method="post">
				
				<div>
					<label htmlFor="name">Nombre</label>
					<input
						type="text"
						placeholder="Nombre"
						name="name"
						id="name"
					/>
				</div>

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
				
				<button>Register</button>
			</form>
		</>
	);
}