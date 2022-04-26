import React from "react";
import Banner from '../Components/Banner';
import img from '../images/intro-img.png';

function HomePage() {

    return (
        <div>
            <div className="home">
                <div className="text-center"><img src={img} alt="" className="w-50 mt-2"/></div>
                
                <div className="my-5 ">
                    <button className="btn btn-secondary btn-lg mx-auto w-25">PS4</button>
                    <button className="btn btn-secondary btn-lg mx-auto w-25">PS5</button>
                    <button className="btn btn-secondary btn-lg mx-auto w-25">XBOX</button>
                    <button className="btn btn-secondary btn-lg mx-auto w-25">SWITCH</button>
                </div>
                <Banner name='Trending' />
                <br />
                <hr />
                <Banner name='New Arrivals' />
                <br />
                <hr />
                <Banner name='Best-Seller' />
                <br />
                <hr />
                <Banner name='Big Deals' />
                <br />
            </div>
            <div class="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">
                                <h3>Contact</h3>
                                <ul>
                                    <li><a href="#">050-301-3489</a></li>
                                    <li><a href="#">jacobelbz@gmail.com</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 item text">
                                <h3>About</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            </div></div>
                        <p class="copyright">Game Zone © 2022</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default HomePage;
