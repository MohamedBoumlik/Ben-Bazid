import React from 'react';

function Login() {
    return (
        <div className='container py-5' >

            <div className='row justify-content-center'>

                <div className="col-md-6">

                    <div className="card">

                       <div className="card-header">
                           <h3>LOGIN</h3>
                       </div>

                        <div className="card-body">

                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
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
