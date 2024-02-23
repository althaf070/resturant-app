import { styled } from "@mui/system";
import { Box, Typography, Drawer, ListItem, ListItemIcon, ListItemButton, ListItemText, List } from "@mui/material";
import CustomButton from "../custombtn/CustomButton";
import logoimg from "../../assets/restu.png";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellanousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const [mobileMenu, setMobileMenu] = useState({left:false})
    const navigate=useNavigate()

const toggledDrawer = (anchor,open) => (event)=>{
    if(event.type == "keydown" && (event.type ==="Tab" || event.type ==="shift")){
        return
    }
    setMobileMenu({...mobileMenu,[anchor]:open})
}

const list = (anchor)=>(
    <Box
    sx={{
        width:anchor === "true" || anchor === "bottom" ? "auto" :250
    }}
    role="presentation"
    onClick={toggledDrawer(anchor,false)}
    onKeyDown={toggledDrawer(anchor,false)}
    >
        <List>
        {nav_titles.map((item,index)=>(
               <ListItem key={index} disablePadding onClick={()=>navigate(item.path)}>
                 <ListItemButton>
                   <ListItemIcon>
                   {
                    index === 0 && <HomeIcon/>
                   }
                    {
                    index === 1 && <FeaturedPlayListIcon/>
                   }
                    {
                    index === 2 && <MiscellanousServicesIcon/>
                   }
                    {
                    index === 3 && <ContactsIcon/>
                   }
                   </ListItemIcon>
                   <ListItemText primary={item.display} />
                 </ListItemButton>
               </ListItem>
        ))}
       </List>
    </Box>
)

  const nav_titles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/dishes",
      display: "Dishes",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/about",
      display: "About Us",
    },
  ];
  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const NavBarLinks = styled(Typography)(() => ({
    fontSize: "18px",
    color: "#2D3250",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#5C8374",
    },
  }));

  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    width: "50px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight:theme.spacing(2),
    [theme.breakpoints.down("md")]: {
     display:"block"
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        maxWidth: "auto",
        backgroundColor: "#FFA732",
        marginLeft: "0px",
        marginBottom: "-24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
        <CustomMenuIcon onClick={toggledDrawer("left",true)}/>
        <Drawer
        anchor="left"
        open={mobileMenu['left']}
        onClose={toggledDrawer("left",false)}
        >
            {list("left")}
        </Drawer>
          <NavBarLogo src={logoimg} />
        </Box>
        <NavBarLinksBox>
          {nav_titles.map((item, index) => (
            <NavBarLinks variant="body2" key={index} onClick={()=>navigate(item.path)}>
              {item.display}
            </NavBarLinks>
          ))}
        </NavBarLinksBox>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavBarLinks variant="body2">Sign Up</NavBarLinks>
        <CustomButton
          backgroundColor="#27374D"
          color="#DDE6ED"
          buttonText="Register"
        />
      </Box>
    </Box>
  );
};

export default Header;
