import ProyectCard from "../ProyectCard/proyectCard";

const Proyects = () => {
  const all_proyects =
    [ { id: 8, title: "WhataCart", description: "", proyect_image: "", tecnologies: [""] },
      { id: 9, title: "FonteShop", description: "", proyect_image: "", tecnologies: [""] },
      { id: 10, title: "Clima Argentino", description: "", proyect_image: "", tecnologies: [""] },
      { id: 11, title: "VideoGames", description: "", proyect_image: "", tecnologies: [""] },
      { id: 12, title: "Rick&Morty", description: "", proyect_image: "", tecnologies: [""] },]
  
   return (
     <div>
       {all_proyects.map((proyect) => {
         <ProyectCard
           id={proyect.id}
           title={proyect.title}
           description={proyect.description}
           tecnologies={proyect.tecnologies}
          proyect_image={proyect.proyect_image}
         />
       })}
     </div>
  );
};

export default Proyects;