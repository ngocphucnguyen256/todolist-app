// import React, {useState} from 'react'
// import axios from 'axios'
// import GoogleLogin  from 'react-google-login'



// const Login = function (){
//     const [user, setUser] = useState(null)
//     const [userName, setUserName] = useState("")
//     const [email, setEmail] = useState("")

// 	const handleLogin =  async googleData => {
// 		const res =  await fetch("http://localhost:5000/api/v1/auth/google", { 
// 			method: "POST", 
// 			body: JSON.stringify({ 
// 			token: googleData.tokenId 
// 		  }), 
// 		  headers: { 
// 			"Content-Type": "application /json" 
// 		  } 
// 		})
// 		const data =  await res.json() 
// 		// store returned user somehow 
// 	  }

// 	return (
// 		<GoogleLogin 
// 		clientId= {process.env.REACT_APP_GOOGLE_CLIENT_ID} 
// 		buttonText= "Log in with Google" 
// 		onSuccess= {handleLogin} 
// 		onFailure= {handleLogin} 
// 		cookiePolicy= {'single_host_origin'} 
// 	/>
// 	)
// }

// export default Login
