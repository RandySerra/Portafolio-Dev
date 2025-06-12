import React from "react";

import {
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaDatabase,
} from "react-icons/fa";

const tecnologias = [
  { nombre: "Node.js", logo: <FaNodeJs /> },
  { nombre: "JavaScript", logo: <FaJs /> },
  { nombre: "CSS", logo: <FaCss3Alt /> },
  { nombre: "HTML", logo: <FaHtml5 /> },
  { nombre: "MongoDB", logo: <FaDatabase /> },
  { nombre: "React", logo: <FaReact /> },
];

const CarruselTecnologias = () => {
  return (
    <>
      <h2 className="subtitulos">Tecnologías</h2>
      <div className="carrusel-wrapper">
        <div className="carrusel iconos-carrusel">
          {[...tecnologias, ...tecnologias].map((tec, index) => (
            <div className="carrusel-item" key={index}>
              {tec.logo}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarruselTecnologias;
