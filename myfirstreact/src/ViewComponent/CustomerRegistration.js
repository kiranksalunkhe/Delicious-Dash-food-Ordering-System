import React, { useReducer, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerRegistration = () => {
    const navigate = useNavigate();

    const init = {
        fname: '',
        lname: '',
        address: '',
        contact: '',
        password: '',
        areaId: 1,
        email: '',
        status: false,
        roleId: 2
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.fld]: action.val };
            case 'reset':
                return init;
            default:
                return state;
        }
    };

    const [info, dispatch] = useReducer(reducer, init);
    const [areas, setAreas] = useState([]);
    const [errors, setErrors] = useState({});
    const [emailExists, setEmailExists] = useState(false);

    useEffect(() => {
        fetch('https://localhost:7019/api/User/GetArea')
            .then(response => response.json())
            .then(data => setAreas(data))
            .catch(error => console.error('Error fetching areas:', error));
    }, []);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhoneNumber = (contact) => {
        const re = /^\d{10}$/;
        return re.test(contact);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        return re.test(password);
    };

    const validateField = (name, value) => {
        let errorMsg = '';

        switch (name) {
            case 'fname':
                if (value.length < 3) {
                    errorMsg = 'First name must be at least 3 characters long';
                }
                break;
            case 'lname':
                if (value.length < 3) {
                    errorMsg = 'Last name must be at least 3 characters long';
                }
                break;
            case 'email':
                if (!validateEmail(value)) {
                    errorMsg = 'Invalid email format';
                }
                break;
            case 'contact':
                if (!validatePhoneNumber(value)) {
                    errorMsg = 'Contact number must be a 10-digit number';
                }
                break;
            case 'password':
                if (!validatePassword(value)) {
                    errorMsg = 'Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one lowercase letter';
                }
                break;
            default:
                break;
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMsg,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'update', fld: name, val: value });
        validateField(name, value);

        if (name === 'email') {
            setEmailExists(false); // Reset emailExists state when the email field is changed
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: '', // Clear the email error message
            }));
        }
    };

    const checkEmailExistence = async () => {
        if (!info.email.trim()) return; // Skip check if email is empty
        try {
            const response = await fetch(`https://localhost:7019/api/User/CheckEmailExists/${info.email}`);
            if (!response.ok) {
                throw new Error('Error checking email.');
            }
            const result = await response.json();
            setEmailExists(result === "Email already exists.");
            setErrors(prevErrors => ({
                ...prevErrors,
                email: result === "Email already exists." ? 'Email already exists.' : '',
            }));
        } catch (error) {
            console.error('Error checking email existence:', error);
            if (error.message === 'Failed to fetch') {
                alert('Network error: Please check your connection.');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = Object.values(errors).filter((error) => error);
        if (newErrors.length > 0) {
            return;
        }

        const senddata = {
            fname: info.fname,
            lname: info.lname,
            email: info.email,
            contact: info.contact,
            password: info.password,
            areaId: info.areaId,
            address: info.address,
            status: true,
            roleId: info.roleId
        };

        const reqdata = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(senddata)
        };

        fetch("https://localhost:7019/api/User/insertCustomer", reqdata)
            .then(response => {
                if (!response.ok) {
                    return response.json().then(error => {
                        if (response.status === 409) { // Conflict error for email already exists
                            setErrors(prevErrors => ({ ...prevErrors, email: 'Email already exists.' }));
                        } else {
                            throw new Error(error.message || 'An error occurred.');
                        }
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                dispatch({ type: 'reset' });
                navigate('/login'); 
            })
            .catch(error => {
                if (error.message === 'Failed to fetch') {
                    alert('Network error: Please check your connection.');
                } else {
                    alert('Registration failed: ' + error.message);
                }
                console.error('Error:', error);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">User Registration</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="fname" className="form-label">First Name</label>
                                    {errors.fname && <div className="text-danger">{errors.fname}</div>}
                                    <input
                                        type="text"
                                        id="fname"
                                        name="fname"
                                        className="form-control"
                                        value={info.fname}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lname" className="form-label">Last Name</label>
                                    {errors.lname && <div className="text-danger">{errors.lname}</div>}
                                    <input
                                        type="text"
                                        id="lname"
                                        name="lname"
                                        className="form-control"
                                        value={info.lname}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    {errors.address && <div className="text-danger">{errors.address}</div>}
                                    <textarea
                                        id="address"
                                        name="address"
                                        className="form-control"
                                        rows="3"
                                        value={info.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contact" className="form-label">Contact Number</label>
                                    {errors.contact && <div className="text-danger">{errors.contact}</div>}
                                    <input
                                        type="tel"
                                        id="contact"
                                        name="contact"
                                        className="form-control"
                                        value={info.contact}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    {errors.email && <p className="text-danger">{errors.email}</p>}
                                    {emailExists && <div className="text-danger">Email already exists.</div>}
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        value={info.email}
                                        onChange={handleChange}
                                        onBlur={checkEmailExistence}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        value={info.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="areaId" className="form-label">Area</label>
                                    <select
                                        id="areaId"
                                        name="areaId"
                                        className="form-control"
                                        value={info.areaId}
                                        onChange={(e) => dispatch({ type: 'update', fld: 'areaId', val: parseInt(e.target.value, 10) })}
                                    >
                                        {areas.map(area => (
                                            <option key={area.areaId} value={area.areaId}>
                                                {area.areaDesc}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                

                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerRegistration;
