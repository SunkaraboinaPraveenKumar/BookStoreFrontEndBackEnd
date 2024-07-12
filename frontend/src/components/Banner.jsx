import React from 'react'
const Banner = () => {
    const Book = '/book.avif';
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row gap-10 my-10">
                <div className="w-full md:w-1/2 mt-12 md:mt-32 md:order-1 order-2">
                    <div className='space-y-6'>
                        <h1 className='text-4xl font-bold'>Hello, Welcome here to learn something<span className='text-pink-500'> new everyday!!</span></h1>
                        <p className='text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquid, molestias id delectus ipsum iure odit quis, nam nisi totam eos fugiat omnis ex quibusdam, adipisci mollitia enim necessitatibus minus.
                            Exercitationem eveniet pariatur enim doloribus nesciunt similique incidunt in. Blanditiis praesentium voluptates accusantium fugit voluptate possimus repudiandae in numquam nostrum facilis, sequi nihil, libero pariatur velit error, ducimus repellendus fugiat?
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button className='btn btn-secondary mt-6'>Secondary</button>
                </div>
                <div className="order-1 w-full md:w-1/2 mt-32">
                    <img src={Book} alt="" className='w-100 h-100 rounded'/>
                </div>
            </div>
        </>
    )
}

export default Banner