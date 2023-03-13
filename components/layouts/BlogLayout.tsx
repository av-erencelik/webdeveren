import { type ReactNode } from "react";
import SocialLinks from "../buttons/SocialLinks";
import Footer from "../footer/Footer";
import BlogNavbar from "../navbar/BlogNavbar";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BlogNavbar />
      {children}
      <SocialLinks />
      <Footer />
    </>
  );
};

export default BlogLayout;
