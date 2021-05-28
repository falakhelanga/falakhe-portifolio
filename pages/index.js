import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Content from "../components/Content";
import Offer from "../components/Offer";
import { motion } from "framer-motion";

const Title = styled.h1`
  color: blue;
`;

const ContentDiv = styled(motion.div)`
  color: #dbdddf;
`;
const Container = styled.div`
  height: 100%;
`;
export default function Home() {
  return (
    <Container className="">
      <div className="mt-4">
        <ContentDiv
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 1.3,
              },
            },
          }}
        >
          <Content>
            Web Developer with 3 plus years of experience able to build
            Javascript web applications from the ground up - information
            gathering, planning, design, development, testing and delivery and
            maintenance. Extremely passionate towards software architecture and
            design combined with sensitivity to serve the needs of the business
            balanced with the delivery of high quality solutions.
          </Content>
        </ContentDiv>

        <Offer />
      </div>
    </Container>
  );
}
