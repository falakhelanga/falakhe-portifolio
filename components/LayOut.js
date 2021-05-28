import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Profile from "./Profile";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const LayoutContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  justify-content: center;
  padding-bottom: 2rem;
  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;
const Aside = styled(motion.aside)`
  flex: 0.2;
  min-height: 100%;
  width: 100%;
  border-radius: 20px;
  background: #c04848; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #480048,
    #c04848
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #480048,
    #c04848
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
`;
const Main = styled.main`
  border-radius: 10px;
  flex: 0.7;
  margin-top: 1rem;
  height: 100%;
  width: 100%;
  background: #c04848;
  background: -webkit-linear-gradient(to top, #480048, #c04848);
  background: linear-gradient(to top, #480048, #c04848);

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  @media (min-width: 768px) {
    margin-top: 0rem;
    border-radius: 20px;
  }
`;
const LayOut = ({ children }) => {
  const router = useRouter();

  return (
    <LayoutContainer className=" mt-3 flex-column flex-md-row container-fluid ">
      <Aside
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            x: -100,
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 0.1,
              bounce: 0.6,
              damping: 11,
            },
          },
        }}
        className="mr-2 pt-3"
      >
        <Profile />
      </Aside>
      <Main className="bg-primary">
        <Navigation />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="pageInitial"
            exit="pageExit"
            animate="pageVisible"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageVisible: {
                opacity: 1,
                x: 0,
              },
              pageExit: {
                opacity: 0,
                x: -100,
                transition: {
                  duration: 0.1,
                },
              },
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Main>
    </LayoutContainer>
  );
};

export default LayOut;
