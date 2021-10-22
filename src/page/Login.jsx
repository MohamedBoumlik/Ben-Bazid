import React ,{useState} from 'react';
import { axios } from 'axios';

function Login() {


    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
    })

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value })
    }

    const loginSubmit = (e) => {
        e.preventdefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.post(`api/login`, data)
        .then(res =>{

        });
    }


    return (
        <div className='container py-5' >

            <div className='row justify-content-center'>

                <div className="col-md-6">

                    <div className="card">

                       <div className="card-header">
                           <h3>LOGIN</h3>
                       </div>

                        <div className="card-body">

                            <form onSubmit={loginSubmit}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInput} name='email' value={loginInput.email} />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={handleInput} name='password' value={loginInput.password}/>
                                </div>
                                <div className="text-center">
                                    <button type="submit" class="btn btn-outline-dark">Login</button>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            
            </div> 

        </div>
    )
}

export default Login
