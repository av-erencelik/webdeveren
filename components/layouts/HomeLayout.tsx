import SocialLinks from "../buttons/SocialLinks";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <SocialLinks />
      <Footer />
    </>
  );
};

export default HomeLayout;
