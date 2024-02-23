import {Box, Container, Typography} from '@mui/material'
import {styled} from '@mui/system'
import logo from '../../assets/restu.png'
import star from '../../assets/Star.png'
import logos from '../../assets/logos.png'
const Partner = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("md")]: {
          flexDirection:"column",
          alignItems:"center",
          textAlign:"center",
          marginBottom:theme.spacing(4),
        },
      }));
      const CustomBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
          marginBottom:theme.spacing(4),
        },
      }));
  return (
   <Box sx={{mt:10}}>
    <CustomContainer>
        <CustomBox>
            <img src={logo} width={"50px"} alt="logo" maxwidth/>
            <Typography variant='body2' sx={{
                color:"#092635",
                fontSize:"16px",
                fontWeight:"bold",
                mt:2
            }}>
                More than 4500+ trusted partners
            </Typography>
            </CustomBox>
            <Box>
                <img src={star} alt="star" />
                <Typography variant='body2' sx={{
                   color:"#22092C", 
                   fontSize:"16px",
                   fontWeight:"bold",
                   mt:2
                }}>
                    5-star Rating (2k+ reviews)
                </Typography>
            </Box>
   
    </CustomContainer>
    <Container sx={{display:"flex",flexDirection:"column"}}>
        <img src={logos} alt="logos" />
    </Container>
   </Box>
  )
}

export default Partner