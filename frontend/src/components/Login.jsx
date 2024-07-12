import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const modalRef = useRef(null);

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</Link>
                        <h3 className="font-bold text-lg">Login!</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input {...register("email", { required: true })} type="email" placeholder='Enter Your Email..' 
                            className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input {...register("password", { required: true })} type="password" placeholder='Enter Your Password..' 
                            className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>Login</button>
                            <span>Not registered!? <Link to="/signup" className='underline text-blue-500'>Signup</Link></span>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
