import React, { useEffect, useContext } from "react";
import HappyHour from "../apis/HappyHour";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom"

const RestaurantTable = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  let history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HappyHour.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await HappyHour.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => {
        return restaurant.id !== id
      }))
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdate = (id) => {
    history.push(`/restaurants/${id}/update`)
  }

  const handleAdd = () => {
    history.push(`/restaurants/add`)
  }

  return (
    <div className="list-group container">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Happy Hours</th>
            <th scope="col">Price</th>
            <th scope="col">Website</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{`${restaurant.start_at} - ${restaurant.end_at}`}</td>
                  <td>{"$".repeat(restaurant.price_rating)}</td>
                  <td>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={restaurant.website_url}
                    >
                      <button className="btn btn-info">Website</button>
                    </a>
                  </td>
                  <td>
                    <button onClick={() => handleUpdate(restaurant.id)} className="btn btn-info">Update</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(restaurant.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="create-button">
        <button onClick={() => handleAdd()} type="button" className="btn btn-info">
          Add
        </button>
      </div>
    </div>
  );
};

export default RestaurantTable;
