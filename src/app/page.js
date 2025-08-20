import Image from "next/image";
import Header  from "./Header/page.js";
import Home from "./Home/page.js";
import About from "./About/page.js";
import Skills from "./Skills/page.js";
import Work from "./Work/page.js";
import Contact from "./Contact/page.js";
import Footer from "./Footer/page.js";

export default function Page() {
  return (
    <>
    <Header />
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
    </>
  );
}
