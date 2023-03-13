import { type ReactNode } from "react";
import Footer from "../footer/Footer";
import BlogNavbar from "../navbar/BlogNavbar";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BlogNavbar />
      {children}
      <Footer />
    </>
  );
};

export default BlogLayout;
