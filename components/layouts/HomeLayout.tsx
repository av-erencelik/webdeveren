import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
