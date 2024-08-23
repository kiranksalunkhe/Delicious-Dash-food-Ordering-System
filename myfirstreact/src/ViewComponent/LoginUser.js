// src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './Slice';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const reqData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };

        try {
            const response = await fetch('https://localhost:7019/api/User/VerifyUser', reqData);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            localStorage.setItem("loggeduser", JSON.stringify(data));
            
            if (data) {
                dispatch(login({
                    userId: data.userId,
                    fname: data.fname,
                    lname: data.lname
                }));
                
                if (data.roleId === 1) {
                    navigate('/restaurant');
                } else if (data.roleId === 2) {
                    navigate('/user');
                } else {
                    setError('Unknown role');
                }
            } else {
                setError('Invalid login');
            }
        } catch (error) {
            setError('Login failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Login</h2>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {error && <div className="alert alert-danger">{error}</div>}

                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? 'Logging in...' : 'Login'}
                                    </button>
                                    <div className='mt-3 text-center'>
                                        <h5>New User?</h5>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <Link to="/regcust" className="btn btn-link">
                                            Register as Customer
                                        </Link>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <Link to="/restreg" className="btn btn-link">
                                            Register as Restaurant
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
