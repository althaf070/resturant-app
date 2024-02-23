import { Box, Container,Typography } from "@mui/material"
import fb from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

import {styled} from '@mui/system'
const Footer = () => {
    const footer_Links=[{
        name:"Guides",
    },
    {
        name:"Services",
    },
    {
        name:"About us",
    },
];
const overview_Links=[{
    name:"Location",
},
{
    name:"PartnerShips",
},
{
    name:"Terms of use & Privacy policies",
},
]
    const CustomContainer = styled(Container)(({ theme }) => ({
       display:"flex",
       justifyContent:"space-around",
       gap:theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            flexDirection:"column",
            textAlign:"center"
        },
      }));
      const FooterLink = styled("span")(({ theme }) => ({
        fontWeight:"300",
        color:"#2C3639",
        fontSize:"16px",
        cursor:"pointer",
         "&:hover":{
            color:"#FF7F4A"
         }
       }));
       const IconBox = styled(Box)(({ theme }) => ({
        display:"flex",
        alignItems:"center",
        gap:"1rem",
         [theme.breakpoints.down("sm")]: {
             justifyContent:"center"
         },
       }));  
  return (
   <Box sx={{py:10,backgroundColor:"#FFF682"}}>
    <CustomContainer>
        <Box>
            <Typography 
            sx={{
                fontSize:"20px",
                color:"#18122B",
                fontWeight:700,
                mb:2
            }}
            >
                Feautered
                </Typography>
                {footer_Links.map((item,index)=>(
                    <>
                    <FooterLink key={index}>{item.name}</FooterLink>
                    <br />
                    </>
                ))}
                
        </Box>
        <Box>
            <Typography 
            sx={{
                fontSize:"20px",
                color:"#18122B",
                fontWeight:700,
                mb:2
            }}
            >
                OverView
                </Typography>
                {overview_Links.map((item,index)=>(
                    <>
                    <FooterLink key={index}>{item.name}</FooterLink>
                    <br />
                    </>
                ))}
                
        </Box>
        <Box>
            <Typography 
            sx={{
                fontSize:"20px",
                color:"#18122B",
                fontWeight:700,
                mb:2,
            }}
            >
                Get in touch
                </Typography>
               <Typography sx={{
                fontSize:"16px",
                color:"#181D31",
                mb:2,
               }}>
                Keep in touch in our social media handle
               </Typography>
                <IconBox>
                <img src={fb} alt="fb" style={{cursor:"pointer"}}/>
                <img src={insta} alt="fb" style={{cursor:"pointer"}}/>
                <img src={twitter} alt="fb" style={{cursor:"pointer"}}/>
                </IconBox>
        </Box>
    </CustomContainer>
   </Box>
  )
}

export default Footer