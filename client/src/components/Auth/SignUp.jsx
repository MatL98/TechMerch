import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [failForm, setFailForm] = useState("");
  let navigate = useNavigate();
  const [datos, setDatos] = useState({
    mail: "",
    password: "",
    username: "",
    surname: "",
    direction: "",
    age: "",
    phone: "",
    photo: "",
  });
  function hide() {
    setFailForm("");
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (datos.username && datos.mail && datos.password) {
        const { data } = await axios.post(
          "http://localhost:3001/auth/signUp",
          datos
        );
        if (data === datos.mail) {
          navigate("/login");
        }
      } else {
        let msn = "es necesario completar todos los datos";
        setFailForm(msn);
        setTimeout(hide, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Registrate</h1>
        <p>
          Tenes una cuenta? Ingresa a <Link to={"/login"}>Inicia Sesión</Link>
        </p>
      </div>
      <form>
        <h2>Formulario de registro</h2>
        <input
          type="text"
          name="mail"
          placeholder="mail"
          id="mail"
          value={datos.amount}
          onChange={(e) => setDatos({ ...datos, mail: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          id="password"
          value={datos.password}
          onChange={(e) => setDatos({ ...datos, password: e.target.value })}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          id="username"
          maxLength="10"
          value={datos.username}
          onChange={(e) => setDatos({ ...datos, username: e.target.value })}
        />
        <input
          type="text"
          name="surname"
          placeholder="apellido"
          id="surname"
          maxLength="10"
          value={datos.surname}
          onChange={(e) => setDatos({ ...datos, surname: e.target.value })}
        />
        <input
          type="text"
          name="direction"
          placeholder="direccion"
          id="direction"
          maxLength="10"
          value={datos.direction}
          onChange={(e) => setDatos({ ...datos, direction: e.target.value })}
        />
        <input
          type="number"
          name="age"
          placeholder="edad"
          id="age"
          maxLength="10"
          value={datos.age}
          onChange={(e) => setDatos({ ...datos, age: e.target.value })}
        />
        <input
          type="number"
          name="phone"
          placeholder="Telefono"
          id="phone"
          maxLength="10"
          value={datos.phone}
          onChange={(e) => setDatos({ ...datos, phone: e.target.value })}
        />
        <input
          type="text"
          name="photo"
          placeholder="Foto"
          id="photo"
          value={datos.photo}
          onChange={(e) => setDatos({ ...datos, photo: e.target.value })}
        />
        <input type="button" value="Enviar" onClick={handleFormSubmit} />
        <input
          type="reset"
          value="Borrar"
          onClick={() => setDatos({ mail: "", password: "", username: "",surname: "",direction: "",age: "", phone: "", photo:"" })}
        />
      </form>
      <div style={{ visibility: failForm ? "visible" : "hidden" }}>
        <p>{failForm ? `${failForm}` : ""}</p>
      </div>
    </div>
  );
};

export default SignUp;
