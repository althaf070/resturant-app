import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import house from '../../assets/ambience.jpg'
const Ambience = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(3),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));
  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
  }));
  const LargeTxt = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
  }));

  const SmalleTxt = styled(Typography)(({ theme }) => ({
    fontSize: "19px",
    color: "#092635",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));
  const TxtFlexBox= styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent:"space-between",
    marginTop:theme.spacing(7),
    padding:theme.spacing(0,5,0,5),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
  }));
  const Divider = styled("div")(({ theme }) => ({
    width:"18%",
    height: "6px",
    backgroundColor:"#092635",
    [theme.breakpoints.down("md")]: {
        marginLeft:"auto",
        marginRight:"auto",
    },
  }));

  return (
    <Box sx={{py:10}}>
        <Container>
            <CustomBox>
                <ImgContainer>
                <img src={house} alt="pic" style={{maxWidth:"100%"}}/>
                </ImgContainer>
                <Box>
                    <Divider/>
                    <Typography variant="h1" sx={{
                        mt:3,
                        fontWeight:"700",
                        fontSize:"35px"
                    }}>
                        You have found ambience you love
                    </Typography>
                    <Typography sx={{
                        color:"#7C81AD"
                    }}>
                        Discover the world of culnary recipes
                    </Typography>
                </Box>
            </CustomBox>
            <TxtFlexBox>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <LargeTxt>250+</LargeTxt>
                    <SmalleTxt>Dishes</SmalleTxt>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <LargeTxt>3000+</LargeTxt>
                    <SmalleTxt>Clients</SmalleTxt>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <LargeTxt>350+</LargeTxt>
                    <SmalleTxt>Delivery per day</SmalleTxt>
                </Box>
            </TxtFlexBox>
        </Container>
    </Box>
  )
};

export default Ambience;
