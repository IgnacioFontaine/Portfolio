import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import Icon from "../Icon/Icon";

const Home = () => {
  const navigate = useNavigate()
   return (
     <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", bgcolor:"#D5CECE", color:"black", height:"500px", width:"400px", borderRadius:4, alignContent:"center"}}>
       <Box sx={{ mt: 5, alignItems:"center", alignContent:"center", justifyItems:"center"  }}>
         <Icon />
         <Typography variant="h2" sx={{fontFamily:"Hamston", textDecoration:"bold", mt:1}} >WERISCO</Typography>
       </Box>
       <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap:1, m:3}}>
         <Button sx={{textDecoration:"none", color:"black"}} onClick={()=>navigate("/stock")}>Stock</Button>
         <Button sx={{textDecoration:"none", color:"black"}} onClick={() => navigate("/sold")}>Ventas</Button>
         <Button sx={{textDecoration:"none", color:"black"}} onClick={() => navigate("/companies")}>Companias</Button>
         <Button sx={{textDecoration:"none", color:"black"}} onClick={()=>navigate("/metrics")}>Estadísticas</Button>
       </Box>
    </Box>
  );
};

export default Home;