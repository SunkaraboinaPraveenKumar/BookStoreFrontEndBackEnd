import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'
const Course = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 sm:px-15 px-4 dark:bg-slate-900 dark: text-white'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl mb-10'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
                    <p className='mb-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid maiores repudiandae ipsa eligendi corporis dolores, necessitatibus possimus mollitia ut quo, enim, rem laboriosam excepturi laudantium optio neque? Laborum, sit iusto</p>
                    <Link to="/">
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {
                        list.map((data) => (
                            <Cards data={data} key={data.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course