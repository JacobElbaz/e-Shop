import React from "react";
import Banner from '../Components/Banner';
import img from '../images/intro-img.png'

function HomePage() {

    return (
        <div className="Home">
            <img src={img} alt=""/>
            <Banner name='Trending'/>
            <br />
            <hr />
            <Banner name='Best-Seller'/>
        </div>
    )
}

export default HomePage;
