import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Navbar/NavBar";
import "./profileStyle.css"
import CardProfile from "./CardProfile";


const Profile = ()=>{
	const [dataUser, setDataUser] = useState([])
	let idUser = localStorage.getItem("id")
	let id = JSON.parse(idUser)

	const getUser = (id) => {
    axios.get(`http://localhost:3001/api/profile/${id}`).then(function (response) {
			let data = response.data
			setDataUser(data)
    });
  };
  useEffect(() => {
		getUser(id);
  }, []);

	return(
		<>
		<NavBar/>
		<div className="containerProfile">
			<h1>Perfil</h1>
			<div>
				<CardProfile data={dataUser}/>
			</div>
		</div>
		</>
	)
}

export default Profile;