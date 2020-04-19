import React,{useState} from "react";
import {auth} from "../../config/firebase";

const Login = () => {
    const [details,setDetails]=useState({
        email:"",
        password:""
    });

    function handleChange(event){
        const {name,value} = event.target;
        setDetails(prevValue => {
        return {
          ...prevValue,
          [name]: value
        };
      });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(details.email,details.password);
        auth.signInWithEmailAndPassword(details.email,details.password).then(response=>{
            console.log(response);
        });
    }
    

    return ( 
    <div>
        <h1>Hello {details.email}</h1>
        <form onSubmit={handleSubmit}>
              <input
              name="email"
                type="text"
                placeholder="Email"
                value={details.email}
                onChange={handleChange}
              />
              <input
              name="password"
                type="password"
                placeholder="Password"
                value={details.password}
                onChange={handleChange}
              />
              <button type="submit">Login</button>
            </form>
            </div>
    );
}

export default Login;