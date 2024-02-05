import { Box, Typography, Avatar } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const Error = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "500px", width: "500px", alignContent: "center", bgcolor:"whitesmoke", borderRadius:4 }}>
        <Box sx={{alignContent:"center", alignItems:"center", m:9}}>
        <Box>
          <Typography variant="h1" color={"black"} sx={{fontFamily:"serif"}}>Error 404</Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", alignContent:"center", alignItems:"center", p:1.5, gap:4}}>
            <Typography variant="h5" color={"black"}>Return to Home</Typography>
            <Button onClick={()=>navigate("/")} ><Avatar alt="Werisco" src={avatarImage} sx={{ width: 75, height: 75}} /> </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Error;