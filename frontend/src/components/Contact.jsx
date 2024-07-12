import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-[600px]'>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Contact</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input 
                                {...register("name", { required: true })} 
                                type="text" 
                                placeholder='Enter Your Name..'
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
                            <span>Message</span>
                            <br />
                            <input 
                                {...register("message", { required: true })} 
                                type="message" 
                                placeholder='Enter Your Message..'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex justify-center mt-4 items-center'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
