import Social from "../Buttons/Social";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Social />
      <Footer />
    </>
  );
};

export default HomeLayout;
