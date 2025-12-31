import { useEffect, useRef } from "react";
import { Box, HStack } from "@chakra-ui/react";
import LittleLemonLogo from "../images/logo1.jpg";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {

    const handleScroll = () => {
      const showForTop = window.scrollY < 50;
      const showForScrollUp = window.scrollY < lastScrollY.current;
      
      if (headerRef.current) {
        headerRef.current.style.transform = (showForTop || showForScrollUp) ? "translateY(0)" : "translateY(-200px)"; 
      }
      lastScrollY.current = window.scrollY;
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#FFFFFF"
      zIndex="2000"
    >
      <Box color="white" maxWidth="1280px" width="100%" margin="0 auto">
        <HStack
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack
            gap="8">
            <Link to={"/#home"}>
                <img className="main-logo" aria-label="Homepage Logo" src={LittleLemonLogo} alt="Little Lemon Logo" width="200px" height="200px"/>
            </Link>
            </HStack>
          </nav>
          <NavBar/>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
