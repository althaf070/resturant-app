import { Box, Typography } from '@mui/material';


const About = () => {

  return (
    <Box sx={{
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        mt:"65px",
        padding:"40px",
        mb:"100px"
    }}>
        <div style={{
            width:"5%",
            height:"5px",
            backgroundColor:"#ffc72e",
            margin:"0 auto"
        }}> </div>

            <Typography variant='h3' sx={{fontWeight:"bold",my:3,color:"#332941"}}>
                About Us
            </Typography>
            <Typography variant='body2' sx={{fontWeight:"500",my:3,fontSize:"15px",color:"#647D87",textAlign:"center"}}>
                Welcome to our resturant,
            </Typography>
       
    </Box>
  )
}

export default About