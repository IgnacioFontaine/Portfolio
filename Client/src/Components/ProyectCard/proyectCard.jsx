const ProyectCard = ({id, title, description, tecnologies}) => {
   return (
     <div key={id}>
       <div>
         <h1>Imagen</h1>
       </div>
       <div>
         <h2>{title}</h2>
         <p>{description}</p>
       </div>
       <div>
         <h5>{tecnologies}</h5>
       </div>
     </div>
  );
};

export default ProyectCard;