const Hero = () => {
  return (
    <section className="hero align-items">
      <div className="hero-principal d-flex align-items-center justify-content-center ">
        <img className="hero-imagen-desarrollador rounded" src="src/assets/Ignacio.png" alt="Foto de Ignacio Fontaine"></img>
        <div >
          <h1>Hola, soy Ignacio Fontaine</h1>
          <h2>Full Stack Developer</h2>
          <div className="iconos-oscuros d-flex align-items-center justify-content-center">
            <h3 className="seccion-descripcion">Ignaciofontainebustos@gmail.com</h3>
            <a  id="copiarTexto" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
            </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;