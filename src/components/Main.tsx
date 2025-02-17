import React from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Home from './Home'

const Main = () => {
    return (
        <div className='bg-slate-950'>
            <div className='flex  h-full w-full'>
                <div className='w-1/12'>
                    <Navbar />
                </div>
                <div className='w-11/13'>
                    <Welcome />
                </div>
            </div>

            <div>
                <Home />
            </div>
        </div>
    )
}

export default Main