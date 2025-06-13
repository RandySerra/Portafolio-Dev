import { IoLogoJavascript } from "react-icons/io5";

import {
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

function Proyects() {
  const proyectos = [
    {
      titulo: "Pinterest",
      imagen: "./src/assets/pagina2.png",
      descripcion: "descripcion del proyecto",
      icono: <FaReact className="proyectos-botones-iconos" />,
      icono2: <FaHtml5 className="proyectos-botones-iconos" />,
      icono3: <FaCss3Alt className="proyectos-botones-iconos" />,
      icono4: <IoLogoJavascript className="proyectos-botones-iconos" />,
      ver: <IoMdLink className="proyectos-botones-iconos" />,
      link: "https://es.pinterest.com/",
    },

    {
      titulo: "proyecto 2",
      imagen: "./src/assets/paginawed.jpg",
      descripcion: "descripcion del proyecto",
      icono: <FaReact className="proyectos-botones-iconos" />,
      icono2: <FaReact className="proyectos-botones-iconos" />,
      ver: <IoMdLink className="proyectos-botones-iconos" />,
      link: "https://es.wikipedia.org/wiki/P%C3%A1gina_web",
    },

    {
      titulo: "proyecto 3",
      imagen: "./src/assets/pagina3.jpg",
      descripcion: "descripcion del proyecto",
      icono: <FaReact className="proyectos-botones-iconos" />,
      icono2: <FaReact className="proyectos-botones-iconos" />,
      ver: <IoMdLink className="proyectos-botones-iconos" />,
    },
    {
      titulo: "proyecto 3",
      imagen: "./src/assets/pagina3.jpg",
      descripcion: "descripcion del proyecto",
      icono: <FaReact className="proyectos-botones-iconos" />,
      icono2: <FaReact className="proyectos-botones-iconos" />,
      ver: <IoMdLink className="proyectos-botones-iconos" />,
    },
    {
      titulo: "proyecto 3",
      imagen: "./src/assets/pagina3.jpg",
      descripcion: "descripcion del proyecto",
      icono: <FaReact className="proyectos-botones-iconos" />,
      icono2: <FaReact className="proyectos-botones-iconos" />,
      ver: <IoMdLink className="proyectos-botones-iconos" />,
    },

  ];
  return (
    <>
      <h2 className="subtitulos"> Proyectos</h2>
      <div className="proyectos-container">
        {proyectos.map((proyecto, index) => (
          <div className="proyecto-card" key={index}>
            <div className="proyecto-container-img">
              {" "}
              <img
                className="proyectos-img"
                src={proyecto.imagen}
                alt={proyecto.titulo}
              />
            </div>

            <h3>{proyecto.titulo}</h3>
            <p>
              Salvamento RD es líder en la venta de vehículos, salvamentos y
              piezas de repuesto.
            </p>
            <div className="proyecto-alinear-botones">
              <div className="proyectos-tecnologias-ver">
                {proyecto.icono}
                {proyecto.icono2}
                {proyecto.icono3}
                {proyecto.icono4}
              </div>
              <div className="proyecto-boton-ver">
                <a key={index} href={proyecto.link}>
                  <button className="botones-iconos">{proyecto.ver}LIVE</button>{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Proyects;
