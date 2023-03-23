import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from './axios';
import requests from './requests';

function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return (
        <header className='banner'
            style={{
                backgroundImage: `url("https://image.tmdb/org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                
            }}>

            <div className='banner__contents'>
                <h1 className='banner__title'> Movie Name</h1>
                    <div className='banner__btns'>
                        <button className='banner__btn'>Play</button>
                        <button className='banner__btn'>My List</button>
                    </div>
                    <h1 className='banner__description'>
                        {truncate(``, 150)}
                    </h1>
            </div>
            <div className='banner--fadeBottom'/>

        </header>
    )
}

export default Banner;