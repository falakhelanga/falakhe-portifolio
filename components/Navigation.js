import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import StyledLink from "./StyledLink";
import { motion } from "framer-motion";
const Links = styled.h4`
  color: white;
  margin-right: 1rem;
  font-weight: bold;
`;

const Navigation = () => {
  const router = useRouter();

  const activePath =
    router.pathname.slice(1) === "" ? "about" : router.pathname.slice(1);

  return (
    <div className="d-flex justify-content-between w-100 container mt-4">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: -100,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              type: "spring",
              bounce: "0.4",
              delay: 0.4,
            },
          },
        }}
        className="active_link text-white text-capitalize"
        style={{ fontWeight: "bold" }}
      >
        {activePath}
      </motion.h2>
      <div className="unactive_links d-flex">
        {activePath !== "about" && (
          <StyledLink href="/" forwardedAs="/">
            About
          </StyledLink>
        )}

        {activePath !== "skills" && (
          <StyledLink href="/skills" forwardedAs="/skills">
            Skills
          </StyledLink>
        )}
        {activePath !== "projects" && (
          <StyledLink href="/projects" forwardedAs="/projects">
            Projects
          </StyledLink>
        )}
      </div>
    </div>
  );
};

export default Navigation;
