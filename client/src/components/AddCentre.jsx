import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import HappyHour from '../apis/HappyHour';

const AddCentre = () => {
    let history = useHistory();

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [priceRating, setPriceRating] = useState("")
    const [website, setWebsite] = useState("")

    const handleAdd = async (e) => {
        e.preventDefault()

        const addRestaurant = await HappyHour.post(`/`, {
            name,
            address,
            start_at: startTime,
            end_at: endTime,
            price_rating: priceRating,
            website_url: website
        })

        history.push("/");
    }

    return (
        <div className="container">
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={e => setName(e.target.value)} id="name" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input onChange={e => setAddress(e.target.value)} id="address" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="start_time">Start Time (24h time in format: 00:00:00)</label>
                    <input onChange={e => setStartTime(e.target.value)} id="start_time" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="end_time">End Time (24h time in format: 00:00:00)</label>
                    <input onChange={e => setEndTime(e.target.value)} id="end_time" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price_rating">Price Rating</label>
                    <input onChange={e => setPriceRating(e.target.value)} id="price_rating" className="form-control" type="number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="website_url">Website URL (include a '//' at the beginning)</label>
                    <input onChange={e => setWebsite(e.target.value)} id="website_url" className="form-control" type="text"/>
                </div>
                <button onClick={handleAdd} className="btn btn-info">Add</button>
            </form>
        </div>
    )
}

export default AddCentre;