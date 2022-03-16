import React from "react";
import "./navBarStyle.css";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();
  const logOut = () => {
    let logged = window.localStorage.getItem("loggedUserWithMail");
    if (logged) {
      window.localStorage.removeItem("loggedUserWithMail");
      window.localStorage.removeItem("token");
      navigate("/login");
    }
  };
  return (
    <div className="navBarHome">
      <img
        className="logoTech"
        src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
        alt="img"
      />
      <div className="navBar">
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/cart"}>Carrito</Link>
          </li>
          <li>
            <Link to={"/profile"}>Perfil</Link>
          </li>
        </ul>
      </div>
      <button className="btnLogOut" onClick={logOut}>
        Log-out
      </button>
    </div>
  );
};
export default NavBar;
