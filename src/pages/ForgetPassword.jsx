import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    useEffect(()=>{
        document.title = "Forget Password || CareerClimb"
    },[])
    const {updatePassword} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

     const   handleForgetPassword= (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
            updatePassword(email)
            .then(()=>{
                window.open("https://mail.google.com/", "_blank")
                navigate("/login")
            })
            
        }
    return (
        <div className='bg-white rounded-3xl mx-auto max-w-lg p-20 my-12'>
           <form className='flex flex-col gap-5' onSubmit={handleForgetPassword}>
           <input className='input input-bordered' type="email" defaultValue={location?.state} name="email" placeholder='Email' />
           <button className='btn bg-cyan-700 hover:bg-cyan-800 text-white'>Forget Password</button>
           </form>
        </div>
    );
};

export default ForgetPassword;