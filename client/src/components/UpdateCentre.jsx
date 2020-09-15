import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import HappyHour from '../apis/HappyHour';

const UpdateCentre = (props) => {
    const { id } = useParams();

    let history = useHistory();

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [priceRating, setPriceRating] = useState("")
    const [website, setWebsite] = useState("")

    useEffect(() => {
        const fetchData = async() => {
            const response = await HappyHour.get(`/${id}`)
            console.log(response)
            console.log(response.data.data.restaurant[0])

            setName(response.data.data.restaurant[0].name)
            setAddress(response.data.data.restaurant[0].address)
            setEndTime(response.data.data.restaurant[0].end_at)
            setStartTime(response.data.data.restaurant[0].start_at)
            setPriceRating(response.data.data.restaurant[0].price_rating)
            setWebsite(response.data.data.restaurant[0].website_url)
        }

        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const updateRestaurant = await HappyHour.put(`/${id}`, {
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
                    <input value={name} onChange={e => setName(e.target.value)} id="name" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input value={address} onChange={e => setAddress(e.target.value)} id="address" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="start_time">Start Time (24h time in format: 00:00:00)</label>
                    <input value={startTime} onChange={e => setStartTime(e.target.value)} id="start_time" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="end_time">End Time (24h time in format: 00:00:00)</label>
                    <input value={endTime} onChange={e => setEndTime(e.target.value)} id="end_time" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price_rating">Price Rating</label>
                    <input value={priceRating} onChange={e => setPriceRating(e.target.value)} id="price_rating" className="form-control" type="number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="website_url">Website URL</label>
                    <input value={website} onChange={e => setWebsite(e.target.value)} id="website_url" className="form-control" type="text"/>
                </div>
                <button onClick={handleSubmit} className="btn btn-info">Submit</button>
            </form>
        </div>
    )
}

export default UpdateCentre