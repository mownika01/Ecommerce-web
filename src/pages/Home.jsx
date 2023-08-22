import React from 'react';
import Navbar from '../components/Navbar';
import Offer from '../components/Offer';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () =>{
    return(
        <div>
        <Offer />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <NewsLetter />
        <Footer />
        </div>
    )
}

export default Home;