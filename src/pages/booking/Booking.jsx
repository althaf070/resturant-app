import { Box, Typography } from "@mui/material"
import {styled} from '@mui/system'
import CustomButton from '../../components/custombtn/CustomButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import buy from '../../assets/buy_icon.png'
import sell from '../../assets/sell_icon.png'
const Booking = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
     width:"30%",
        [theme.breakpoints.down("md")]: {
          width:"85%"
        },
      }));

      const GuidesBox = styled(Box)(({ theme }) => ({
        display:"flex",
        justifyContent:"space-around",
        width:"70%",
        marginTop:theme.spacing(5),
        marginBottom:theme.spacing(5),
        [theme.breakpoints.down("md")]: {
          width:"100%",
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom:0,
            flexDirection:"column"
        },
      }));

      const GuideBox = styled(Box)(({ theme }) => ({
        display:"flex",
        flexDirection:"column",
       alignItems:"center",
        marginTop:theme.spacing(5),
        marginBottom:theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            margin:theme.spacing(2,0,2,0),
           
        },
      }));
  return (
   <Box sx={{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:"40px"
   }}>
    <div style={{
        width:"5%",
        height:"5px",
        backgroundColor:"#22092C",
        margin: "0 auto"
    }}/>
      <Typography variant="h3" sx={{
        fontWeight:"bold",
        fontSize:"35px",
        color:"#22092c",
        my:3
    }}>
       How to book
    </Typography>
    <CustomBox>
    <Typography variant="body2" sx={{
        fontWeight:500,
        fontSize:"15px",
        color:"#22092c",
        textAlign:"center",
    }}>
        Everything you need to know
    </Typography>
    </CustomBox>
    <GuidesBox>
      <GuideBox>
        <img src={buy} alt="buy" />
        <Typography variant="body2"
        sx={{fontWeight:"bold", fontSize:"14px",color:"#424769"}}
        >
          Buy 
        </Typography>
        <ArrowRightAltIcon style={{color:"#092635"}}/>
      </GuideBox>
      <GuideBox>
        <img src={sell} alt="buy" />
        <Typography variant="body2"
        sx={{fontWeight:"bold", fontSize:"14px",color:"#424769"}}
        >
          Sell
        </Typography>
        <ArrowRightAltIcon style={{color:"#092635"}}/>
      </GuideBox>
      <GuideBox>
        <img src={sell} alt="buy" />
        <Typography variant="body2"
        sx={{fontWeight:"bold", fontSize:"14px",color:"#424769"}}
        >
          Payment Methods
        </Typography>
        <ArrowRightAltIcon style={{color:"#092635"}}/>
      </GuideBox>
    </GuidesBox>
    <CustomButton
    backgroundColor={"#0F1B4C"}
    color={"#fff"}
    buttonText={"Seee Full Guides"}
    guidebtn={true}
    />
   </Box>
  )
}

export default Booking