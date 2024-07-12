import React from 'react'

function Cards({ data }) {
    return (
        <>
            <div className='mt-4 my-3 p-3' key={data.key}>
                <div className="card w-92 bg-base-100 shadow-xl dark:bg-slate-900 dark: text-white">
                    <figure>
                        <img
                            src={data.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.name}
                            <div className="badge badge-secondary">{data.category}</div>
                        </h2>
                        <p>{data.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline">${data.price}</div>
                            <div className="badge badge-outline hover:bg-pink-500 hover:text-white  duration-200 cursor-pointer px-2 py-1 rounded-full border-[2px]">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards