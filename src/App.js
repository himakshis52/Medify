import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./Components/Footer/Footer";
import DownloadApp from "./Components/Sections/DownloadApp/DownloadApp";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
