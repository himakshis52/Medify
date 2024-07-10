import { Box, Container, Stack } from "@mui/material";

import Navbar from "../Components/Navbar/Navbar" 
import HeroSection from "../Components/HeroSection/HeroSection";
import SearchHospital from "../Components/SearchHospital/SearchHospital";
import HospitalServices from "../Components/HospitalServices/HospitalServices";
import Offers from "../Components/Sections/Offers/Offers"
import Specialization from "../Components/Sections/Specialization/Specialization";
import Specialists from "../Components/Sections/Specialists/Specialists";
import PatientCaring from "../Components/Sections/PatientCaring/PatientCaring";
import Blogs from "../Components/Sections/Blogs/Blogs";
import OurFamilies from "../Components/Sections/OurFamilies/OurFamilies";
import FAQs from "../Components/Sections/FAQs/FAQs"


const Home = () => {
    return(
        <Box>
            <Box sx={{ background: "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)" }}
            mb={4} >
                <Navbar />
                <Container maxWidth="xl">
                    <HeroSection />
                    <Stack
                        p={{ xs: 2.5, md: 8 }}
                        mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
                        position="relative"
                        zIndex={99}
                        bgcolor="#fff"
                        borderRadius="15px"
                        spacing={10}
                        boxShadow="0 0 12px rgba(0,0,0,0.1)"
                    >
                    <SearchHospital />
                    <HospitalServices />
                    </Stack>
                </Container>
            </Box>
            <Offers />
            <Specialization />
            <Specialists />
            <PatientCaring />
            <Blogs />
            <OurFamilies />
            <FAQs />
        </Box>
    )
}

export default Home;