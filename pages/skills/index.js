import React from "react";
import SkillsType from "../../components/SkillsType";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";

const Title = styled.h4`
  color: whitesmoke;
  font-weight: bold;
`;
const Container = styled.div`
  height: 90vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #a03548;

    border-radius: 10px;
  }
`;

const Accadio = styled(Accordion)`
  background-color: transparent !important;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.89);
`;
const index = () => {
  return (
    <Container className="container">
      <div className="mt-4">
        <motion.div
          animate="visible"
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            },
          }}
        >
          <Accadio className="">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Title className="text-capitalize ">Languages</Title>
            </AccordionSummary>
            <AccordionDetails>
              <SkillsType
                skills={["Javascript", "Typescript", "node.js"]}
                value={80}
              />
            </AccordionDetails>
          </Accadio>
        </motion.div>
        <motion.div
          animate="visible"
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.6,
              },
            },
          }}
        >
          <Accadio>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Title className="text-capitalize ">AWS</Title>
            </AccordionSummary>
            <AccordionDetails>
              <SkillsType
                skills={[
                  "lambda",
                  "dynamodb",
                  "Aws S3",
                  "Api Gateway",
                  "Cognito",
                ]}
              />
            </AccordionDetails>
          </Accadio>
        </motion.div>
        <motion.div
          animate="visible"
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.7,
              },
            },
          }}
        >
          <Accadio>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Title className="text-capitalize ">back end</Title>
            </AccordionSummary>
            <AccordionDetails>
              <SkillsType
                skills={[
                  "express.js",
                  "mongoDB",
                  "MySQL",
                  "restful apis",
                  "graphQL apis",
                ]}
              />
            </AccordionDetails>
          </Accadio>
        </motion.div>
        <motion.div
          animate="visible"
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.8,
              },
            },
          }}
        >
          <Accadio>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Title className="text-capitalize ">front End</Title>
            </AccordionSummary>
            <AccordionDetails>
              <SkillsType
                skills={[
                  "next.js",
                  "react.js",
                  "react-native",
                  "html5",
                  "css3",
                  "redux",
                  "bootstrap",
                  "material ui",
                ]}
              />
            </AccordionDetails>
          </Accadio>
        </motion.div>
        <motion.div
          animate="visible"
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.9,
              },
            },
          }}
        >
          <Accadio>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Title className="text-capitalize ">Testing</Title>
            </AccordionSummary>
            <AccordionDetails>
              <SkillsType
                skills={["jest", "enzyme", "mocha", "chai"]}
                value={80}
              />
            </AccordionDetails>
          </Accadio>
        </motion.div>
        <motion.div
          animate="visible"
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 1,
              },
            },
          }}
        >
          <Accadio>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Title className="text-capitalize ">Other Tools/ tech</Title>
            </AccordionSummary>
            <AccordionDetails>
              <SkillsType
                skills={[
                  "webpack",
                  "git and github",
                  "vscode",
                  "adobe xd",
                  "figma",
                ]}
              />
            </AccordionDetails>
          </Accadio>
        </motion.div>
      </div>
    </Container>
  );
};

export default index;
