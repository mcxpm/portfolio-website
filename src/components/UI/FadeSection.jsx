/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

function FadeSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <Box
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        transition: "opacity 1s, transform 1s",
      }}
      ref={domRef}
    >
      {props.children}
    </Box>
  );
}

export default FadeSection;
