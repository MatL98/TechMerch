import React, { useState } from "react";
import axios from "axios";

const List = ({ data }) => {
  const prod = data;
	console.log(data);
  const [updtProd, setProd] = useState(prod);

  const updateOp = () => {
    axios
      .patch(`http://localhost:3001/api/productos/${updtProd.id}`, updtProd)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteOp = () => {
    axios
      .delete(`http://localhost:3001/api/productos/${prod.id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
      <div>
				<h3>{prod.name}</h3>
				<p>{prod.description}</p>
				<p>{prod.code}</p>
				<img className="imgProducts" src={prod.photo} alt="productImg" />
				<p>{prod.price}</p>
				<p>{prod.stock}</p>
			</div>
	)
};
export default List;
