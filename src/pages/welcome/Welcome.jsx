import {Box, Container, Typography} from '@mui/material'
import {styled} from '@mui/system'
import CustomButton from '../../components/custombtn/CustomButton';
import welcome from '../../assets/welcome.png'
const Welcome = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display:"flex",
        justifyContent:"center",
        gap:theme.spacing(5),
        marginTop:theme.spacing(3),
        [theme.breakpoints.down("md")]: {
          flexDirection:"column",
          alignItems:"center",
          textAlign:"center"
        },
      }));
      const Title = styled(Typography)(({ theme }) => ({
        margin:theme.spacing(4,0,4,0),
        fontWeight:"bold",
        color:"#fff",
        fontSize:"64px",
        [theme.breakpoints.down("sm")]: {
            fontSize:"40px",
        },
      }));
  return (
    <Box sx={{
        backgroundColor:"#FFA732",
        minHeight:"80vh"
    }}>
        <Container>
        <CustomBox>
            <Box sx={{flex:"1"}}>
                <Typography
                variant='body2'
                sx={{
                    fontSize:"18px",
                    color:'white',
                    lineHeight:"1.2em",
                    fontWeight:"500",
                    mt:10,
                    mb:4
                }}
                >
                    Welcome to Resturant.Foodi!
                </Typography>
                <Title variant='h1'
              >
                    Discover What You Love To Eat
                </Title>
                <Typography variant='p' sx={{
                    my:4,color:"#1A120B",fontSize:"20px",fontWeight:"500"
                }}>
                    We are a restaurant that offers healthy and delicious food at affordable prices.
                </Typography>
                <CustomButton
                 backgroundColor="#27374D"
                 color="#DDE6ED"
                 buttonText="More about us"
                 welcomeBtn={true}
                />
            </Box>
            <Box sx={{flex:"1.25"}}>
                <img src={welcome} alt="welcome"
                style={{maxWidth:"100%",marginBottom:"2rem"}}
                />
            </Box>
        </CustomBox>
        </Container>
    </Box>
  )
}

export default Welcome