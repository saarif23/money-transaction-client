"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import Link from "next/link";

//drawer
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const drawerWidth = 240;
const navItems = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "blogs",
    pathName: "/blogs",
  },
  {
    route: "About",
    pathName: "/about",
  },
  {
    route: "Contact",
    pathName: "/contact",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", marginTop: "20px" }}
    >
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <Link key={idx} href={item.pathName}>
            <ListItem
              disablePadding
              sx={{
                "& :hover": {
                  color: "red",
                  fontWeight: "800",
                  textDecoration: "underline",
                },
              }}
            >
              <ListItemButton
                sx={{
                  textAlign: "center",
                }}
              >
                <ListItemText primary={item.route} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#009286",
        }}
      >
        <Container
        
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 5px",
          }}
        >
          <Typography variant="h5" color="white">
            Navbar
          </Typography>
          <Box
            sx={{
              "& button:hover": {
                color: "#90006F",
                textDecoration: "underline",
              },
              display: { xs: "none", md: "block" },
            }}
          >
            {navItems.map((item) => (
              <Link key={item} href={item.pathName}>
                <Button sx={{ color: "white" }}>{item.route}</Button>
              </Link>
            ))}
          </Box>
          <div className="max-lg:block lg:hidden">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              {mobileOpen ? <MdClose /> : <MdMenu />}
            </IconButton>
          </div>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </>
  );
}
export default Navbar;

