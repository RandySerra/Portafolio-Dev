import {
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaDatabase,
} from "react-icons/fa";

function Proyects() {
  const proyectos = [
    {
      titulo: "proyecto 1",
      imagen: "./src/assets/pagina2.png",
      descripcion: "descripcion del proyecto",
      icono: <FaReact className="botones-iconos" />,
      icono2: <FaReact className="botones-iconos" />,
    },
    {
      titulo: "proyecto 2",
      imagen: "./src/assets/paginawed.jpg",
      descripcion: "descripcion del proyecto",
      icono: <FaReact />,
    },

    {
      titulo: "proyecto 3",
      imagen: "./src/assets/pagina3.jpg",
      descripcion: "descripcion del proyecto",
      icono: <FaReact />,
    },
  ];
  return (
    <>
      <h2 className="subtitulos"> Proyectos</h2>
      <div className="proyectos-container">
        {proyectos.map((proyecto, index) => (
          <div className="proyecto-card" key={index}>
            <img
              className="proyectos-img"
              src={proyecto.imagen}
              alt={proyecto.titulo}
            />
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>

            <div className="proyectos-iconos">
              {proyecto.icono}
              {proyecto.icono2}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Proyects;
