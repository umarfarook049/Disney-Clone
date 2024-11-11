import React, { useEffect, useState } from 'react'
import johnwick from "../images/johnwick.png"
import { json } from 'stream/consumers'

const Home = () => {

    const [movies, setMovies] = useState([])


    const getMovies = () => {
        try {
            fetch("https://api.themoviedb.org/3/discover/movie?api_key=66b41facdbba6abf7ec79518e9e9c4aa")
                .then(res => res.json())
                .then(json => setMovies(json.results))


        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])



    return (
        <div className='grid grid-cols-4'>

            {movies.map((data:any) => {
                return <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2">
                        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains" />
                    </div>
                </>
            })}

        </div>

    )
}

export default Home