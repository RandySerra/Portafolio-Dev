import Botonesinfo from "../Components/Botones/Botones";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";

function Home() {
  const botones = [
    {
      nombre: "correo",
      icono: <CgMail />,
      texto: "randyserra2@gmail.com",
    },

    {
      nombre: "cv",
      icono: <PiReadCvLogoLight />,
      texto: "",
    },

    {
      nombre: "Github",
      icono: <FaGithub />,
      texto: "",
    },

    {
      nombre: "Linkedin",
      icono: <FaLinkedinIn />,
      texto: "",
    },
  ];

  return (
    <>
      <div className="home-img" id="home">
        <div className="foto">
          <img className="foto" src="./src/assets/foto2x2.png" alt="" />
        </div>

        <div className="nombre">
          <h2>Randy Serra Torres</h2>{" "}
          <h3>
            Desarollador Software
            <br />
            Front-end / Junior
          </h3>
          {botones.map((elemento, index) => (
            <button className="botones" index={index.nombre}>
              {elemento.icono} {elemento.texto}
            </button>
          ))}
        </div>
      </div>
      <div className="home-info">
        <div className="botones-info"></div>
      </div>
    </>
  );
}

export default Home;
