import { Box, Container, Typography, styled } from "@mui/material"
import CustomButton from "../../components/custombtn/CustomButton";
import delivery from '../../assets/DeliveryImg.png'
const Delivery = () => {
    const CustomContainer = styled(Box)(({ theme }) => ({
        display:"flex",
        justifyContent:"center",
        height:"413px",
        backgroundColor:"#F39F5A",
        borderRadius:"16px",
        alignItems:"center",
        [theme.breakpoints.down("md")]: {
          flexDirection:"column",
          alignItems:"center",
         padding:theme.spacing(3,3,0,3),
         width:"90%",
         height:"auto",
        },
      }));
      const CustomBox = styled(Box)(({ theme }) => ({
        padding:theme.spacing(10,0,10,0),
        margin:theme.spacing(0,2,0,2),
        [theme.breakpoints.down("md")]: {
          padding:"0",

        },
      }));
  return (
<CustomBox>
    <CustomContainer >
        <Box>
            <Typography sx={{fontSize:"35px",fontWeight:"800",color:"whitesmoke"}}>
                Super fast delivery
            </Typography>
            <Typography sx={{fontSize:"15px",fontWeight:"800",color:"#F1F6F9"}}>
                Door 2 delivery
            </Typography>
            <CustomButton
            backgroundColor={"#F8FAE5"}
            color={"#1D2B53"}
            buttonText={"Order Now!!"}
            />
        </Box>
        <img src={delivery} alt="img" style={{maxWidth:"100%"}}/>
    </CustomContainer>
</CustomBox>
  )
}

export default Delivery