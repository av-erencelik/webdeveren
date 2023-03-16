import { type ReactNode } from "react";
import Footer from "../footer/Footer";
import BlogNavbar from "../navbar/BlogNavbar";
import SocialLinks from "../buttons/SocialLinks";

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
