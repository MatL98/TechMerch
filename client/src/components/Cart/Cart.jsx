import React, { useEffect, useState } from "react";
import List from "../ListProducts/List";
import axios from "axios";
import { Link } from "react-router-dom";


const Cart = () => {
const [itemsInCart, setItemsInCar] = useState()

const getItemsToCart = () => {
	axios
		.get(`http://localhost:3001/api/carrito`)
		.then(function (response) {
      let data = response.data[0].products
			setItemsInCar(data);
      console.log(itemsInCart);
		})
		.catch(function (error) {
			console.log(error);
		});
};
useEffect(() => {
	getItemsToCart()
}, []);

  return itemsInCart ? (
    <div>
      <div className="cartNoItem">
        <h5>No hay compras en el carrito..</h5>{" "}
        <Link to="/home">
          <button className="btnBack">Volver al home</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="cartStyle">
      {/* {itemsInCart.map((item) => (
        <List data={item}/>
      ))} */}
    </div>
  );
};
export default Cart;
