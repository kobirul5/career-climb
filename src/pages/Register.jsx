import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import GoogleImage from '../assets/google.png'
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Register = () => {
    useEffect(()=>{
        document.title = "Register || CareerClimb"
    },[])
    const { user, setUser, registerWithEmailAndPassword, setUserProfile, handleGoogle } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
            return toast("Please enter upper case, lower case and minimum 6 character password")
        }
        registerWithEmailAndPassword(email, password)
            .then((result) => {
                const newUser = result.user;
                setUser(newUser)
                setUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                    })
                    .catch(error => {

                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast(errorMessage)
            });
    }

    const handleGoogleLogin = ()=>{
        handleGoogle()
        navigate('/')
    }
    const showPass = () =>{
        setShowPassword(!showPassword)
    }
    return (
        <div className="my-10 min-h-screen text-cyan-700">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-lg  shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div onClick={showPass} className="absolute right-5 bottom-[14px] text-xl hover:cursor-pointer ">
                                {
                                    showPassword? <FaRegEyeSlash /> :<FaRegEye />
                                }
                            
                            </div>
                            <input name="password" type={showPassword ? "": "password"} placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-400  hover:bg-cyan-700  text-white ">Register</button>
                        </div>
                    </form>
                    <div className="px-8 py-4">
                        <button onClick={handleGoogleLogin} className="border p-2 flex gap-4 border-cyan-400 max-w-[300px] items-center rounded-md">
                            <img className="w-8" src={GoogleImage} alt="" />
                            <p className="font-semibold">Continue With Google</p>
                        </button>
                    </div>
                    <p className="pb-8 px-8 pt-4">have an Account?<Link className="text-blue-400" to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;