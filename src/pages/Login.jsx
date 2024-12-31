import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import GoogleImage from '../assets/google.png'
import {toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Login = () => {

    useEffect(()=>{
        document.title = "Login || CareerClimb"
    },[])
    const { user, setUser, loginWithEmailAndPassword, handleGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        
        loginWithEmailAndPassword(email, password)
            .then((result) => {
                const newUser = result.user;
                setUser(newUser)
                navigate(location?.state ? location.state : "/")
                toast("Login Successfully")
            })
            .catch((error) => {
                const errorMsg = error.message;
                toast(errorMsg)
            });
    }
    const handleGoogleLogin = ()=>{
        navigate("/")
        handleGoogle()
        
    }
    const showPass = () =>{
        setShowPassword(!showPassword)
    }
    return (
        <div className=" my-10 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-lg  shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={(e)=>setEmail(e.target.value)} name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div onClick={showPass} className="absolute right-5 bottom-[45px] text-xl hover:cursor-pointer ">
                                {
                                    showPassword? <FaRegEyeSlash /> :<FaRegEye />
                                }
                            
                            </div>
                            <input name="password" type={showPassword ? "": "password"} placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link state={email} to="/forgetPassword" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-400 hover:bg-cyan-700 text-white">Login</button>
                        </div>
                    </form>
                    <div className="px-8 py-4">
                        <button onClick={handleGoogleLogin} className="border border-cyan-400 p-2 flex gap-4 max-w-[300px] items-center rounded-md">
                            <img className="w-8" src={GoogleImage} alt="" />
                            <p className="font-semibold">Continue With Google</p>
                        </button>
                    </div>
                    <p className="pb-8 px-8">Don't have a Account?<Link className="text-blue-400" to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;