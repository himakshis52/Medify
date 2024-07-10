import { Box, Typography, styled } from "@mui/material";


const HeaderBg = styled(Box)`
  width: 100%;
  height: 40px;
  background-color: #2AA7FF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled(Typography)`
  text-align: center;
  color: #FFFFFF;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const Header = () => {
    
    return(
        <HeaderBg>
                <HeaderText>
                The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
                </HeaderText>
        </HeaderBg>
    )
}

export default Header;