import { Box,Typography } from "@mui/material";
import {styled} from '@mui/system'
import like from '../../assets/like.png'
import heartic from '../../assets/heart.png'
import shareic from '../../assets/share.png'

const CustomCard = ({img,price,share,heart,likes,item}) => {
  const DishesBox = styled(Box)(({ theme }) => ({
    maxWidth:350,
    borderTopLeftRadius:"10px",
    borderTopRightRadius:"10px",
    backGroundColor:"#fff",
    margin:theme.spacing(0,2,0,2),
    [theme.breakpoints.down("md")]: {
      margin:theme.spacing(2,0,2,0)
    },
    "&:hover":{
      boxShadow: "0 0 5px rgba(0,0,0,0.2)",
      backGroundColor:"#f5f5f5",
      transform:"scale(1.05)",
      transition:"all 0.3s ease-in-out"
    }
  }));
  const InfoBox = styled(Box)(({ theme }) => ({
    display:"flex",
   flexDirection:"column",
    alignItems:"center",
  }));
  return (
    <DishesBox>
      <Box width={"100%"}>
        <img src={img} alt="gg" style={{maxWidth:"100%"}}/>
      </Box>
      <Box padding={"1rem"}>
        <Typography variant="body2" sx={{fontWeight:"700"}}>${price}</Typography>
        <Typography variant="body2" sx={{my:2}}>{item}</Typography>
        <Box sx={{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
        }}>
          <InfoBox>
            <img src={like} alt="like" />
            <Typography variant="body2" sx={{mt:1}}>
              {likes}
            </Typography>
          </InfoBox>
          <InfoBox>
            <img src={heartic} alt="heasrt" />
            <Typography variant="body2" sx={{mt:1}}>
              {heart}
            </Typography>
          </InfoBox>
          <InfoBox>
            <img src={shareic} alt="like" />
            <Typography variant="body2" sx={{mt:1}}>
              {share}
            </Typography>
          </InfoBox>
        </Box>
      </Box>
    </DishesBox>
  )
}

export default CustomCard