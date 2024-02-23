import { Button } from '@mui/material';
import {styled } from '@mui/system'

const CustomButton = ({backgroundColor,color,buttonText,welcomeBtn,guidebtn,getStartedBtn}) => {
    const CustomButton = styled(Button)(({theme})=>({
        fontSize:"14px",
        color: color,
        fontWeight:"700",
        cursor:"pointer",
        display:"block",
        backgroundColor:backgroundColor,
        padding:"0.5rem 1.25rem",
        borderRadius: "8px",
        textTransform:"none",
        border:"2px solid transparent",
        "&:hover":{
           backgroundColor:color,
           color:backgroundColor,
           borderColor:backgroundColor,
        },
        [theme.breakpoints.down("md")]:{
            margin:(welcomeBtn || getStartedBtn) && theme.spacing(0,"auto",3,"auto"),
            width:(welcomeBtn || getStartedBtn) && "90%",
           },
           [theme.breakpoints.down("sm")]:{
            margin:guidebtn && theme.spacing(3),
            width:guidebtn && "90%",
           }
    
    }));
  return (
    <CustomButton>{buttonText}</CustomButton>
  )
}

export default CustomButton