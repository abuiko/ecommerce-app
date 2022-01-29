import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Recommended from '../components/Recommended'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />

            <Recommended />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home
