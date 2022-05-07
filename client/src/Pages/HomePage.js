import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner';
import img from '../images/intro-img.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTrend} from '../actions/products.action';
import ProductCards from '../Components/ProductCards';

function HomePage() {

  const dispatch = useDispatch();
  const trending = useSelector((state) => state.trendProductsReducer);
  const newest = useSelector((state) => state.newestProductsReducer);
  const best = useSelector((state) => state.bestsellerProductsReducer);
  const deals = useSelector((state) => state.dealsProductsReducer);
  useEffect(() => {
        dispatch(getTrend());
}, [dispatch]);

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
                <Link to='/allProducts' className="btn btn-secondary btn-lg mx-auto w-25">ALL</Link>
                <h1>Trending</h1>
                <ProductCards products={trending}></ProductCards>
                <br />
                <hr />
                <h1>New Arrivals</h1>
                <ProductCards products={trending}></ProductCards>
                <br />
                <hr />
                <h1>Best-Seller</h1>
                <ProductCards products={trending}></ProductCards>
                <br />
                <hr />
                <h1>Big Deals</h1>
                <ProductCards products={trending}></ProductCards>
                <br />
            </div>
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Contact</h3>
                                <ul>
                                    <li><a href="#">050-301-3489</a></li>
                                    <li><a href="#">jacobelbz@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>About</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            </div></div>
                        <p className="copyright">Game Zone © 2022</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default HomePage;
