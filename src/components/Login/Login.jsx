import React from 'react'
import axios from 'axios';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
    const navigate = useNavigate()
    const handlerSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email === '' || password === '') {
            swal({
                title: "Los campos no pueden estar vacios!",
                text: "Porfavor ingrese los datos que corresponda",
                icon: "error",
            })
        }
        else if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swal({
                title: "Datos ingresados invalidos!",
                text: "Porfavor ingrese los datos validos",
                icon: "warning",
            })
        } else {
            axios
                .post('http://challenge-react.alkemy.org/', { email, password })
                .then(res => {
                    swal({
                        title: "Bienvenido!!",
                        text: "Datos ingresados correctos!",
                        icon: "success",
                    })
                    const tokenRecibido = res.data.token
                    localStorage.setItem('token', tokenRecibido);
                    navigate('/home')
                })
        }
    }
    return (
        <>
            <div className='div-login'>
                <form className='signin' onSubmit={handlerSubmit}>
                    <h2 className='title-login'>LOGIN IN </h2>
                    <input className='form-login' type='email' name='email' placeholder='Email' />
                    <input className='form-login' type='password' name='password' placeholder='password' />
                    <button type='submit' >Sign In</button>
                </form>
            </div>
        </>
    )
}
export default Login;