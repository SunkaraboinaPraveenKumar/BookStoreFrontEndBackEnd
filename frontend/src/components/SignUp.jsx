import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';
import axios from 'axios';
import toast from 'react-hot-toast';
function SignUp() {
    const navigate=useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) =>{
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
        await axios.post('http://localhost:3000/user/signup',userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success("Sign Up Successfull!");
                navigate("/");
            }
            localStorage.setItem("users",JSON.stringify(res.data));
        })
        .catch((error)=>{
            if(error.response){
                // console.log("Error: ",error);
                // alert("Error: "+error.response.data.message);
                toast.error(error.response.data.message);
            }
        })
    }
    const openLoginModal = () => {
        document.getElementById("my_modal_3").showModal();
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-[600px]'>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Sign Up</h3>
                        <div className='mt-4 space-y-2'>
                            <span>FullName</span>
                            <br />
                            <input 
                                {...register("fullname", { required: true })} 
                                type="text" 
                                placeholder='Enter Your FullName..'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input 
                                {...register("email", { required: true })} 
                                type="email" 
                                placeholder='Enter Your Email..'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input 
                                {...register("password", { required: true })} 
                                type="password" 
                                placeholder='Enter Your Password..'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>Sign Up</button>
                            <span className='text-xl'>Having Account!? 
                                <button className='underline text-blue-500' onClick={openLoginModal}>
                                    Login
                                </button>
                            </span>
                        </div>
                    </form>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default SignUp;
