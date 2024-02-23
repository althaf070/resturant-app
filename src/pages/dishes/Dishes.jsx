import { Box, Container, Typography } from "@mui/material"
import CustomCard from "../../components/customcard/CustomCard"
import { Data } from "../../static/Data";
import {styled} from '@mui/system'
const Dishes = () => {
  const DishesBox = styled(Box)(({ theme }) => ({
    display:"flex",
   justifyContent:"space-between",
    marginTop:theme.spacing(5),
    marginBottom:theme.spacing(5),
    [theme.breakpoints.down("md")]: {
        alignItems:"center",
        flexDirection:"column"
       
    },
  }));
  const PropetiesTextBox = styled(Box)(({ theme }) => ({
 [theme.breakpoints.down("md")]: {
        textAlign:"center"
       
    },
  }));
  return (
    <Box sx={{mt:5,backgroundColor:"#F5FAFE",py:10}}>
      <Container>
        <PropetiesTextBox>
          <Typography variant="h2">
              Featured Dishes
          </Typography>
          <Typography variant="h4">
              Explore south indian DishesBox
          </Typography>
        </PropetiesTextBox>
        <DishesBox>
          {Data.map((item)=> (
            <CustomCard
            key={item.id}
            item={item.item}
            img={item.img}
            price={item.price}
            likes={item.likes}
            share={item.share}
            heart={item.heart}
            
            />
          ))}
        </DishesBox>
      </Container>
    </Box>
  )
}

export default Dishes