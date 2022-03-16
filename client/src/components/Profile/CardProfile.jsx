import React from "react";
import "./profileStyle.css"

const CardProfile = (data) => {
	const dataUser = data.data;
	console.log(dataUser);
  return (
    <div className="cardProfile">
      <img className="userImg" src={dataUser.photo} alt="" />
      <p>Nombre: <span>{dataUser.username}</span></p>
      <p>Apellido: <span>{dataUser.surname}</span></p>
      <p>edad: <span>{dataUser.age}</span></p>
      <p>telefono: <span>{dataUser.phone}</span></p>
      <p>direccion: <span>{dataUser.direction}</span></p>
    </div>
  );
};

export default CardProfile;
