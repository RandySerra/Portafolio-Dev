import { FaHome, FaCode } from "react-icons/fa";

function Menuvertical() {
  const items = [
    {
      nombre: "<Inicio/>",
      icono: <FaHome className="icono"/>,
      id: "home",
    },

    {
      nombre: "boton 2",
      icono: <FaCode className="icono" />,
      id: "sobre_mi",
    },
  ];
  const irASeccion = (id) => {
    const seccion = document.getElementById(id);
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="menu-vertical">
     
        {items.map((elemento, index) => (
          <button
            className="botones-iconos"
            key={index}
            onClick={() => irASeccion(elemento.id)}
          >
            {" "}
            {elemento.icono}{elemento.nombre}
          </button>
          
        ))}
        <div />
      </div>

  );
}

export default Menuvertical;
