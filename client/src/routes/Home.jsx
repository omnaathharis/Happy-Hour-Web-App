import React from 'react'
import Header from '../components/Header'
import RestaurantTable from '../components/RestaurantTable'
import Map from '../components/Map'

const Home = () => {
    return (
        <div>
            <Header/>
            <Map/>
            <RestaurantTable/>
        </div>
    )
}

export default Home;