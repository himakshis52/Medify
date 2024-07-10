
  import { Link } from "react-router-dom";
  import MedifyLogo from "../../Assets/Vector.png";
  import HeaderEle from "../Header/Header"
  import styles from "./Navbar.module.css";
  import { useState } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import MenuIcon from "@mui/icons-material/Menu";
  import { Container, Button, Stack, useMediaQuery, IconButton } from "@mui/material";

  
  export default function NavBar() {
    const isMobile = useMediaQuery("(max-width:900px)");
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <header>
        <HeaderEle />
  
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <Link to="/">
              <img src={MedifyLogo} alt="Logo" height={27} />
            </Link>
  
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems={{ xs: "flex-start", md: "center" }}
              className={[styles.navlinks, menuOpen && styles.active]}
              pt={{ xs: 12, md: 1 }}
              pb={{ xs: 4, md: 1 }}
              px={{ xs: 4, md: 0 }}
            >
              <Link>Find Doctors</Link>
              <Link to="/search">Hospitals</Link>
              <Link>Medicines</Link>
              <Link>Surgeries</Link>
              <Link>Software for Provider</Link>
              <Link>Facilities</Link>
              <Link to="/my-bookings">
                <Button variant="contained" disableElevation>
                  My Bookings
                </Button>
              </Link>
  
              {isMobile && (
                <IconButton
                  onClick={() => setMenuOpen(false)}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 32,
                    color: "#fff",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Stack>
  
            {isMobile && (
              <IconButton onClick={() => setMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Container>
      </header>
    );
  }
  