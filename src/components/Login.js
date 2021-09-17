import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Login = function (){
    const [users, setUser] = useState(null)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(()=>{
        axios
        .get("/api/users")
        .then((users)=>{setUser(users)})
        .catch((error)=> console.log(error))
    }, [])

    function submitForm() {
		if (userName === "") {
			alert("Please fill the username field");
			return;
		}
		if (email === "") {
			alert("Please fill the email field");
			return;
		}
		axios
			.post("/api/users", {
				username: userName,
				email: email,
			})
			.then(function () {
				alert("Account created successfully");
				window.location.reload();
			})
			.catch(function () {
				alert("Could not creat account. Please try again");
			});
	}
	return (
		<>
			<h1>My Project</h1>
			{users === null ? (
				<p>Loading...</p>
			) : users.length === 0 ? (
				<p>No user available</p>
			) : (
				<>
					<h2>Available Users</h2>
					<ol>
						{users.map((user, index) => (
							<li key={index}>
								Name: {user.name} - Email: {user.email}
							</li>
						))}
					</ol>
				</>
			)}

			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setUserName(e.target.value)}
					type="text"
					placeholder="Enter your username"
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Enter your email address"
				/>
				<input type="submit" />
			</form>
		</>
	)
}

export default Login
