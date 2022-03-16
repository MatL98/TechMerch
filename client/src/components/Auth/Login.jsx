import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const Login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [failForm, setFailForm] = useState("");
  let navigate = useNavigate();
  const [datos, setDatos] = useState({
    mail: "",
    username: "",
    password: "",
  });
  function hide() {
    setShowMessage(false);
    setFailForm("");
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (datos.username && datos.mail && datos.password) {
        const { data } = await axios.post("http://localhost:3001/auth/login", datos);
        console.log(data);
        if (data.dataUser === datos.mail) {
          window.localStorage.setItem(
            "loggedUserWithMail",
            JSON.stringify(data.dataUser)
          );
          window.localStorage.setItem("token",
          JSON.stringify(data.token))

          window.localStorage.setItem("id",
          JSON.stringify(data.idUser))
          navigate("/home");
        }
        setShowMessage(true);
        setTimeout(hide, 2000);
      } else {
        let msn = "es necesario completar los campos";
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
        <h1>Inicia sesion</h1>
        <p>
          No tenes una cuenta? Ingresa a <Link to={"/signUp"}>Registrate</Link>
        </p>
      </div>
      <form>
        <h2>Login</h2>
        <input
          type="email"
          name="mail"
          placeholder="mail"
          id="mail"
          value={datos.amount}
          onChange={(e) => setDatos({ ...datos, mail: e.target.value })}
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
          type="password"
          name="password"
          placeholder="contraseña"
          id="password"
          value={datos.password}
          onChange={(e) => setDatos({ ...datos, password: e.target.value })}
        />
        <input type="button" value="Enviar" onClick={handleFormSubmit} />
        <input
          type="reset"
          value="Borrar"
          onClick={() => setDatos({ concept: "", amount: "", type: "" })}
        />
      </form>
      <div style={{ visibility: showMessage ? "visible" : "hidden" }}>
        <p>Usuario y/o Contraseña invalida</p>
      </div>
      <div style={{ visibility: failForm ? "visible" : "hidden" }}>
        <p>{failForm ? `${failForm}` : ""}</p>
      </div>
    </div>
  );
};

export default Login;
