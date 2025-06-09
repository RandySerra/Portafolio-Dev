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
      link: "https://mail.google.com/mail/u/2/#inbox?compose=GTvVlcRzDCwfFCkghFwfTFKcTtTJKGxFnFkdHXBMWnBrmnlzdvdldxrqfMZwCKlZQFkghwqrCFmxL",
    },

    { nombre: "cv",
      icono: <PiReadCvLogoLight />, 
      texto: "",
      link: "./src/assets/Randy_CV_Dev.pdf",
      descargar: true, 
    },

    {
      nombre: "Github",
      icono: <FaGithub />,
      texto: "",
      link: "https://github.com/RandySerra",
    },

    {
      nombre: "Linkedin",
      icono: <FaLinkedinIn />,
      texto: "",
      link: "https://www.linkedin.com/in/randy-serra-517411346/",
    },
  ];

  return (
    <>
      <div className="home-img" id="home">
        <div className="foto">
          <img className="foto" src="./src/assets/foto2x2.png" alt="" />
        </div>

        <div className="nombre">
          <h4>
            Desarollador Front-End
            <h1 className="typewriter">Randy Serra Torres</h1>
          </h4>
          <div className="contenerdor-botones">
            {botones.map((elemento, index) => (
              <a
                key={index}
                href={elemento.link}
                target="_blank"
                rel="noopener noreferrer"
                download={elemento.descargar ? true : undefined}
              >
                {" "}
                <button className="botones" index={index.nombre}>
                  {elemento.icono} {elemento.texto}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="home-info">
        <div className="botones-info"></div>
      </div>
    </>
  );
}

export default Home;
