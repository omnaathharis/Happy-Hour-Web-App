import React from 'react'
import Header from '../components/Header'
import RestaurantTable from '../components/RestaurantTable'
import Map from '../components/Map'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Header/>
            <Map/>
            <RestaurantTable/>
            <Footer/>
        </div>
    )
}

export default Home;