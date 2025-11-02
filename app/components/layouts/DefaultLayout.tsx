import { Outlet } from "react-router";
import { Footer, Navbar } from "../modules";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
