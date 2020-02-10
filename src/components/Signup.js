import React, {useState} from "react";
import axios from "axios";

export default function Login({history}) {
    const [formInfo, setFormInfo] = useState({username: "", password: ""});
    
    const handleChange = e => {
        setFormInfo({...formInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("https://zeitpages-staging.herokuapp.com/auth/register", formInfo)
            .then(res => {
                localStorage.setItem("jwt", res.data.token)
                history.push("/")
            })
            .catch(err => console.error(err))
    }
    
    return (
    <div className="auth-form">
        <h2>Register an account to post your zaddr</h2>
        <form onSubmit={handleSubmit}>   
            <input
            name="username"
            type="text"
            value={formInfo.username}
            onChange={handleChange}
            placeholder="username" />
            
            <input
            name="password"
            type="password"
            value={formInfo.password}
            onChange={handleChange}
            placeholder="password" />
            <button>Submit</button>
        </form> 
    </div>
    )
}