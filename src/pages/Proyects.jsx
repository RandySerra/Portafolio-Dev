function Proyects() {
  const proyectos = [
    {
      titulo: "proyecto 1",
      imagen: "./src/assets/foto2x2.png",
      descripcion: "descripcion del proyecto",
    },
    {
      titulo: "proyecto 2",
      imagen: "./src/assets/uniforme pm.png",
      descripcion: "descripcion del proyecto",
    },

    {
      titulo: "proyecto 3",
      imagen: "./src/assets/foto2x2.png",
      descripcion: "descripcion del proyecto",
    },
  ];
  return (
    <>
    <h2>	proyectos</h2>
  <div className="proyectos-container">
      {proyectos.map((proyecto, index) => (
        <div className="proyecto-card" key={index}>
          <img src={proyecto.imagen} alt={proyecto.titulo} />
          <h3>{proyecto.titulo}</h3>
          <p>{proyecto.descripcion}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Proyects;
