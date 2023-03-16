import { type ReactNode } from "react";
import Footer from "../footer/Footer";
import BlogNavbar from "../navbar/BlogNavbar";
import Social from "../Buttons/Social";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BlogNavbar />
      {children}
      <Social />
      <Footer />
    </>
  );
};

export default BlogLayout;
