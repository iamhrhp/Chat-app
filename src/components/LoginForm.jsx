import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, SetError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': "cc12a0bf-16fb-4371-ab5a-6dfda16e40fd", 'User-Name': username, "User-Secret": password };

        try{
            //credential => chatengine => give message
            await axios.get('https://api.chatengine.io/chats', {headers: authObject });
            //works out => logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch(error){
            //error try different credential
            SetError('Sorry, You have entered wrong credentials!')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required  />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required  />
                    <div align="center">
                        <button type="submit" className="button" >
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error} </h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;