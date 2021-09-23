// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// const Login = function (){
//     const [users, setUsers] = useState(null)
//     const [userName, setUserName] = useState("")
//     const [email, setEmail] = useState("")

//     useEffect(()=>{
//         axios
//         .get("http://localhost:5000/api/users")
//         .then((users)=>{setUsers(users.data)})
//         .catch((error)=> console.log(error))
//     }, [])

//     function submitForm() {
// 		if (userName === "") {
// 			console.log("Please fill the username field");
// 			return;
// 		}
// 		if (email === "") {
// 			console.log("Please fill the email field");
// 			return;
// 		}
// 		axios
// 			.post("http://localhost:5000/api/users/add", {
// 				username: userName,
// 				email: email,
// 			})
// 			.then(function () {
// 				console.log("Account created successfully");
// 				// window.location.reload();
// 			})
// 			.catch(function () {
// 				console.log("Could not creat account. Please try again");
// 			});
// 	}

// 	return (
// 		<>
// 			<h1>My Project</h1>
// 			{users === null ? (
// 				<p>Loading...</p>
// 			) : users.length === 0 ? (
// 				<p>No user available</p>
// 			) : (
// 				<>
// 					<h2>Available Users</h2>
// 					<ol>
// 						{users.map((user, index) => (
// 							<li key={index}>
// 								Name: {user.name} - Email: {user.email}
// 							</li>
// 						))}
// 					</ol>
// 				</>
// 			)}

// 			<form onSubmit={submitForm}>
// 				<input
// 					onChange={(e) => setUserName(e.target.value)}
// 					type="text"
// 					placeholder="Enter your username"
// 				/>
// 				<input
// 					onChange={(e) => setEmail(e.target.value)}
// 					type="text"
// 					placeholder="Enter your email address"
// 				/>
// 				<input type="submit" />
// 			</form>
// 		</>
// 	)
// }

// export default Login
