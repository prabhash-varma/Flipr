import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')



    const submitHandler = async () => {
        fetch('http://localhost:9999/signupapi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                confirmpassword: confirmpassword
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.msg === 'err') {
                    alert('user already exists')
                }
                else {
                    navigate('/navbar')
                }
            })
    }

    return (
        <>
            <section className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://www.pvot.in/content/images/size/w300/blogs/markets_Ul3m381.jpg"
                                            alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', backgroundSize: "cover", height: "650px", width: "450px" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form >

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                </div>

                                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', marginLeft: '30%', fontSize: '230%' }}>SignIn Here</h3>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form2Example17" className="form-control form-control-lg" placeholder='Name' name='name' onChange={(e) => setName(e.target.value)} />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)} />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder=' Confirm Password' name='confirmpassword' onChange={(e) => setConfirmPassword(e.target.value)} />
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="button" style={{ marginLeft: '40%', padding: '10px 20px' }} onClick={submitHandler}>Login</button>
                                                </div>

                                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81', marginLeft: '25%' }}>Already have an account? <Link to="/"
                                                    style={{ color: '#393f81' }}>Login here</Link></p>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup