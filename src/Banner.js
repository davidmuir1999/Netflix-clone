import React from 'react'
import "./Banner.css";

function Banner() {
    return (
        <header className='banner'
            style={{
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
                        Test
                    </h1>
            </div>
            <div className='banner--fadeBottom'/>

        </header>
    )
}

export default Banner;