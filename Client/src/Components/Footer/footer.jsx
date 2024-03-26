const Footer = () => {
  return (
    <footer id="contacto" className="seccion-oscura d-flex flex-column align-items-center justify-content-center"> 
      <img className="footer-logo" src="src/assets/portafolio-de-negocios.jpg" alt="Logo del portafolio"></img>
      <p className="footer-texto text-center">Todas las ideas son programables.<br/>¡Hagamos realidad tu proyecto!</p>
      <span className="seccion-titulo mt-1">¡Contáctame!</span>
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">

        <a href="https://github.com/IgnacioFontaine" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ignacio-fontaine/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="mailto:ignaciofontainebustos@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-envelope"></i>
        </a>
      </div>
      <div className="derechos-de-autor">Creado por Ignacio Fontaine (2024) &#169;</div>
    </footer>
  );
};

export default Footer;