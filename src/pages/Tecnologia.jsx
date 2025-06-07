import React from "react";

import {FaNodeJs, FaJs, FaCss3Alt, FaHtml5, FaReact, FaDatabase } from "react-icons/fa";

const tecnologias = [ 

  { nombre: "Node.js", logo: <FaNodeJs className="icono" /> },
  { nombre: "JavaScript", logo: <FaJs className="icono" /> },
  { nombre: "CSS", logo: <FaCss3Alt className="icono" /> },
  { nombre: "HTML", logo: <FaHtml5 className="icono" /> },
  { nombre: "MongoDB", logo: <FaDatabase className="icono" /> },
  { nombre: "React", logo: <FaReact className="icono" /> },
];

const CarruselTecnologias = () => {
  return (
    <>
      <h2>Tecnologías</h2>
      <div className="carrusel-wrapper">
        <div className="carrusel">
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
