import { Link, useNavigate } from "react-router-dom";
import { useContext, useState,useEffect } from "react";
import { UserContext } from "../../context/UserProvider";

import {FormState, UserContextType } from "../../types";


const Login = () => {
  const { user, setUser } = useContext(UserContext) as UserContextType;
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    id:'',
    usuario: "",
    password: "",
    rol: "",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    setUser([]);
    navigate("/");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUser(
    [...user,
       inputValues
      ]);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {}, [])
  
  return (
    <>
      <h2>{user ? "en linea" : "offline"}</h2>
      <div
        className="flex items-center justify-center w-full h-screen bg-slate-400"
        id="container"
      >
        <div
          id="content"
          className="flex flex-col w-4/6 bg-orange-100 h-3/6 justify-content-center rounded-xl"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center pt-10 "
          >
            <input
              onChange={handleChange}
              value={inputValues.usuario}
              type="email"
              name="usuario"
              placeholder="Correo Electronico"
              className="mb-4"
            ></input>
            <input
              onChange={handleChange}
              value={inputValues.password}
              type="password"
              name="password"
              placeholder="contraseña"
            ></input>
            <label id="checkbox">
              Recordarme
              <input type="checkbox" id="checkbox"></input>
            </label>

            <select
              name="rol"
              defaultValue={inputValues.rol}
              onChange={handleChange}
              className="w-32 m-3 text-center border-2 border-solid border-slate-800 rounded-xl"
            >
              <option id="" value="">
                Elige tu rol
              </option>

              <option id="reclutador" value="reclutador">
                Reclutador
              </option>
              <option id="postulante" value="postulante">
                Postulante
              </option>
            </select>
            <button type="submit"
              onClick={handleLogin}
              className="w-40 h-8 mb-2 bg-white border-solid border-slate-800 rounded-"
            >
              Iniciar Sesion
            </button>
            <button className="w-48 h-8 mb-2 bg-white border-solid border-slate-800 rounded-xl">
              Iniciar Sesion con Google
            </button>
            <p>¿Olvidaste tu contraseña?</p>
            <Link to="/Registro">
              <p>Registra tu usuario</p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;