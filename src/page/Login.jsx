import React ,{useState} from 'react';
import { axios } from 'axios';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
function Login() {

    const history = useHistory();

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
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
        
        console.log(data)

        // axios.post(`/api/login`, data)
        // .then(res =>{
        //         console.log(res)
        //     // if(res.data.status === 200){

        //     //     // localStorage.setItem('auth_token', res.data.token);
        //     //     // localStorage.setItem('name', res.data.name);
        //     //     // swal('Success',res.data.message,'success');
        //     //     // history.push('/admin/produits')
        //     //     console.log(res)

        //     // }else if(res.data.status === 401){

        //     //     // swal('Warning',res.data.message,'warning')
        //     //     console.log(res)


        //     // }else{
        //     //     setLogin({...loginInput, error_list: res.data.validation_errors})

        //     // }

        // });

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
                                <div className="mb-3">
                                    <label forhtml="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInput} name='email' value={loginInput.email} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    <span>{loginInput.error_list.email}</span>
                                </div>

                                <div className="mb-3">
                                    <label forhtml="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleInput} name='password' value={loginInput.password}/>
                                    <span>{loginInput.error_list.password}</span>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-outline-dark">Login</button>
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
